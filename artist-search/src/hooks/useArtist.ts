import { useCallback, useEffect, useState } from "react";
import { getArtistByName } from "../services";
import { Errors } from "../utils";

interface ArtistInfo {
  loading: boolean;
  error: string | null;
  artist: Artist | null;
  setArtistName: React.Dispatch<React.SetStateAction<string>>;
}

export const useArtist = (): ArtistInfo => {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [artistName, setArtistName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getArtistInfo = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const artist = await getArtistByName(artistName);
      artist ? setArtist(artist) : setError(Errors.artistNotFound);
    } catch (error) {
      setError(Errors.errorLoadingArtist);
    } finally {
      setLoading(false);
    }
  }, [artistName]);

  useEffect(() => {
    if (artistName) {
      getArtistInfo();
    }
  }, [getArtistInfo, artistName]);

  return { setArtistName, artist, loading, error };
};
