import axios from "axios";

export interface LocationSuggestion {
  display_name: string;
  lat: number;
  lon: number;
}

export async function fetchSuggestions(
  query: string
): Promise<LocationSuggestion[]> {
  if (!query.trim()) {
    return [];
  }

  try {
    const response = await axios.get<LocationSuggestion[]>(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: query,
          format: "json",
          addressdetails: 1,
          limit: 5,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
