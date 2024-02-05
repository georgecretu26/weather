import React from "react";
import { RowCss } from "./WeatherCard.styles";

interface DateTimeProps {
  label: string;
  value?: string | number;
  extra?: string;
}

export const Row = ({ label, value, extra }: DateTimeProps) => {
  return (
    <RowCss>
      {label}: {value && value} {extra && extra}
    </RowCss>
  );
};
