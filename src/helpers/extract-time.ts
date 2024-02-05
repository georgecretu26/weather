export function extractTime(dateTime: string) {
  const parts = dateTime.split("T");
  return parts.length > 1 ? parts[1] : "";
}
