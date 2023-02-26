let clientID = "f096a693fcda4991991ca3d415d7ce69";
let clientSecret = "89d8beaf33f74415b634cbe631591b01";
let refreshToken =
  "AQCsxYkfnDGxjCtUGEE9iJY3tk0OzJE0yHqwbnMXW0hUZLpO_lsLk0IB3EjUxE92paR3HbyoGtgT09meAx-vwTuG1uMT6yk_88V5RPpdRntnclU4U2IhteDPMbFKoiZ6G-o";
let basic = Buffer.from(`${clientID}:${clientSecret}`).toString("base64");

const fetchAccessToken = async (refreshToken) => {
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

export const getNowPlaying = async (refreshToken) => {
  let { access_token } = await fetchAccessToken(refreshToken);

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
