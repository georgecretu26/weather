import { getWeatherDescription } from "@/helpers";

describe("getWeatherDescription", () => {
  it("returns the correct description for a known weather code", () => {
    expect(getWeatherDescription(0)).toBe("Clear sky");
    expect(getWeatherDescription(1)).toBe("Mainly clear");
  });

  it('returns "Partly cloudy" for code 2', () => {
    expect(getWeatherDescription(2)).toBe("Partly cloudy");
  });

  it('returns "Unknown weather" for an unknown weather code', () => {
    expect(getWeatherDescription(100)).toBe("Unknown weather");
  });

  it("returns the correct description for negative weather code", () => {
    expect(getWeatherDescription(-1)).toBe("Unknown weather");
  });

  it("returns the correct description for weather codes with special conditions", () => {
    expect(getWeatherDescription(95)).toBe("Thunderstorm: Slight or moderate");
    expect(getWeatherDescription(99)).toBe("Thunderstorm with heavy hail");
  });
});
