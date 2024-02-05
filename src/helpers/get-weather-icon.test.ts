import { getWeatherIconClass } from "@/helpers";

describe("getWeatherIconClass", () => {
  it("returns the correct icon class for known weather codes", () => {
    expect(getWeatherIconClass(0)).toBe("fa-sun");
    expect(getWeatherIconClass(1)).toBe("fa-cloud-sun");
    expect(getWeatherIconClass(3)).toBe("fa-cloud");
  });

  it('returns "fa-cloud-rain" for both code 51 and 53', () => {
    expect(getWeatherIconClass(51)).toBe("fa-cloud-rain");
    expect(getWeatherIconClass(53)).toBe("fa-cloud-rain");
  });

  it('returns "fa-question" for an unknown weather code', () => {
    const unknownCode = 100;
    expect(getWeatherIconClass(unknownCode)).toBe("fa-question");
  });

  it("returns the correct icon class for special condition codes", () => {
    expect(getWeatherIconClass(95)).toBe("fa-bolt");
    expect(getWeatherIconClass(99)).toBe("fa-cloud-meatball");
  });

  it('returns "fa-snowflake" for multiple snow-related codes', () => {
    expect(getWeatherIconClass(71)).toBe("fa-snowflake");
    expect(getWeatherIconClass(73)).toBe("fa-snowflake");
    expect(getWeatherIconClass(75)).toBe("fa-snowflake");
  });
});
