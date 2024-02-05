const weatherCodeToIconMap: { [key: number]: string } = {
  0: "fa-sun",
  1: "fa-cloud-sun",
  2: "fa-cloud-sun",
  3: "fa-cloud",
  45: "fa-smog",
  48: "fa-smog",
  51: "fa-cloud-rain",
  53: "fa-cloud-rain",
  55: "fa-cloud-showers-heavy",
  56: "fa-cloud-meatball",
  57: "fa-cloud-meatball",
  61: "fa-cloud-rain",
  63: "fa-cloud-rain",
  65: "fa-cloud-showers-heavy",
  66: "fa-icicles",
  67: "fa-icicles",
  71: "fa-snowflake",
  73: "fa-snowflake",
  75: "fa-snowflake",
  77: "fa-snowflake",
  80: "fa-cloud-rain",
  81: "fa-cloud-rain",
  82: "fa-poo-storm",
  85: "fa-snowflake",
  86: "fa-snowflake",
  95: "fa-bolt",
  96: "fa-cloud-meatball",
  99: "fa-cloud-meatball",
};

export const getWeatherIconClass = (weatherCode: number): string =>
  weatherCodeToIconMap[weatherCode] || "fa-question";
