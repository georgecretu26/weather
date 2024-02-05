import { useState, useEffect } from "react";
import { useDebounce } from "./use-debounce";
import { fetchSuggestions, LocationSuggestion } from "../api/fetch-suggestions";

interface UseLocationSuggestionsReturn {
  suggestions: LocationSuggestion[];
  isLoading: boolean;
  error: Error | null;
}

export function useFetchSuggestions(
  searchQuery: string
): UseLocationSuggestionsReturn {
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const debouncedQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (!debouncedQuery) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    fetchSuggestions(debouncedQuery)
      .then((newSuggestions) => {
        setSuggestions(newSuggestions);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [debouncedQuery]);

  return { suggestions, isLoading, error };
}
