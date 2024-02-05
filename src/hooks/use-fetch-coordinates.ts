import { useState } from "react";
import { fetchCoordinates as fetchCoords } from "../api/fetch-coordinates";

export const useFetchCoordinates = () => {
  const [coordinates, setCoordinates] = useState<{
    latitude: null | number;
    longitude: null | number;
  }>({ latitude: null, longitude: null });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCoordinates = async (searchQuery: string) => {
    if (!searchQuery) {
      setError("Search query is empty");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const coords = await fetchCoords(searchQuery);
      setCoordinates(coords);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch location data"
      );
      setCoordinates({ latitude: null, longitude: null });
    } finally {
      setLoading(false);
    }
  };

  return { coordinates, loading, error, fetchCoordinates };
};
