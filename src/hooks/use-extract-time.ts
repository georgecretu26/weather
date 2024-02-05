import { extractTime } from "@/helpers/extract-time";
import { useState, useEffect } from "react";

export function useExtractTime(dateTimeString: string) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const extractedTime = extractTime(dateTimeString);
    setTime(extractedTime);
  }, [dateTimeString]);

  return time;
}
