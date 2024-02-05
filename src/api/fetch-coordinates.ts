import axios from "axios";

interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

export const fetchCoordinates = async (
  searchQuery: string
): Promise<Coordinates> => {
  if (!searchQuery) {
    throw new Error("Search query is empty");
  }

  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: searchQuery,
          format: "json",
          limit: 1,
        },
      }
    );

    if (response.data && response.data.length > 0) {
      const { lat, lon } = response.data[0];
      return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
    } else {
      throw new Error("Location not found");
    }
  } catch (err) {
    throw new Error("Failed to fetch location data");
  }
};
