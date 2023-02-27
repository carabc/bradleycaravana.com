import { getNowPlaying } from "@/lib/spotty";

export default async function spotify(req, res) {
  try {
    const response = await getNowPlaying(
      process.env.SPOTIFY_REFRESH_TOKEN,
      process.env.SPOTIFY_CLIENT_ID,
      process.env.SPOTIFY_CLIENT_SECRET,
    );

    if (response.status === 204 || response.status > 400) {
      console.log("Not listening to anything, or not connected to Spotify.");
      return res.status(200).json({ isPlaying: false });
    }

    let data = await response.json();
    let allArtists = data.item.artists.map((artist) => artist.name).join(", ");
    let songName = data.item.name;
    let albumName = data.item.album.name;
    let isPlaying = data.is_playing;
    let albumImageUrl = data.item.album.images[0].url;
    let songUrl = data.item.external_urls.spotify;

    return res.status(200).json({
      allArtists,
      songName,
      albumName,
      isPlaying,
      albumImageUrl,
      songUrl,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
}
