import { extractTime } from "@/helpers";

describe("extractTime", () => {
  it('should extract the time part from a dateTime string containing "T"', () => {
    const dateTime = "2024-02-04T07:58";
    const expectedTime = "07:58";
    expect(extractTime(dateTime)).toBe(expectedTime);
  });

  it('should return an empty string when "T" is not present in the dateTime string', () => {
    const dateTime = "2024-02-04 07:58";
    expect(extractTime(dateTime)).toBe("");
  });

  it("should return an empty string when the dateTime string is empty", () => {
    const dateTime = "";
    expect(extractTime(dateTime)).toBe("");
  });

  it('should handle dateTime strings with multiple "T"s correctly', () => {
    const dateTime = "2024-02-04TT07:58TextraT";
    const expectedTime = "";
    expect(extractTime(dateTime)).toBe(expectedTime);
  });

  it('should return an empty string if "T" is the last character in the string', () => {
    const dateTime = "2024-02-04T";
    expect(extractTime(dateTime)).toBe("");
  });
});
