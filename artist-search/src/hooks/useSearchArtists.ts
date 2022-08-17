import { useCallback, useEffect, useState } from "react";
import { searchArtistsByName } from "../services";
import { Errors } from "../utils";

interface ArtistsInfo {
  loading: boolean;
  error: string | null;
  matchedArtists: ArtistMatches[] | null;
}

export const useSearchArtists = (artistName: string): ArtistsInfo => {
  const [matchedArtists, setMatchedArtists] = useState<ArtistMatches[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getArtistInfo = useCallback(async (searchText: string) => {
    try {
      setLoading(true);
      setError(null);
      const matchedArtistsList = await searchArtistsByName(searchText);
      setMatchedArtists(matchedArtistsList);
    } catch (error) {
      setError(Errors.errorLoadingArtist);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getArtistInfo(artistName);
  }, [artistName, getArtistInfo]);

  return { matchedArtists, loading, error };
};
