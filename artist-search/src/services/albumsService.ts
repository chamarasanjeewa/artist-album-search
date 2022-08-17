import { artistRequests } from "./artistAxiosConfig";
const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const searchArtistsByName = async (
  artistName: string
): Promise<ArtistMatches[]> => {
  try {
    const url = `${baseUrl}?method=artist.search&artist=${artistName}&api_key=${apiKey}&format=json`;

    const response = await artistRequests.get(url);
    const matchedArtistsList = response?.results?.artistmatches
      .artist as ArtistMatches[];
    return matchedArtistsList;
  } catch (error) {
    console.log(error); //TODO log error to server
    throw error;
  }
};

const getArtistByName = async (artistName: string): Promise<Artist | null> => {
  try {
    const url = `${baseUrl}?method=artist.getinfo&artist=${artistName}&api_key=${apiKey}&format=json`;

    const response = await artistRequests.get(url);
    const artist = await response.artist;
    return artist;
  } catch (error) {
    console.log(error); //TODO log error to server
    throw error;
  }
};

export { getArtistByName, searchArtistsByName };
