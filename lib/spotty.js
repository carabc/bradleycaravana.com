const fetchAccessToken = async (refreshToken, clientID, clientSecret) => {
  let basic = Buffer.from(`${clientID}:${clientSecret}`).toString("base64");
  // ?grant_type=client_credentials   <-- bad turkee
  const paramString = `grant_type=refresh_token&refresh_token=${refreshToken}`;
  const searchParams = new URLSearchParams(paramString);
  let res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: searchParams,
  });

  return res.json();
};

export const getNowPlaying = async (refreshToken, clientID, clientSecret) => {
  let { access_token } = await fetchAccessToken(
    refreshToken,
    clientID,
    clientSecret,
  );

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
