import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Row } from "@/components/WeatherCard/Row";

describe("Row", () => {
  it("renders the label and value", () => {
    render(<Row label="Temperature" value="20°C" />);
    expect(screen.getByText(/Temperature:/i)).toBeInTheDocument();
    expect(screen.getByText(/20°C/i)).toBeInTheDocument();
  });

  it("renders the label, value, and extra text when provided", () => {
    render(<Row label="Temperature" value="20°C" extra="Feels like 18°C" />);
    expect(screen.getByText(/Temperature:/i)).toBeInTheDocument();
    expect(screen.getByText(/20°C/i)).toBeInTheDocument();
    expect(screen.getByText(/Feels like 18°C/i)).toBeInTheDocument();
  });

  it("renders only the label if value and extra are not provided", () => {
    render(<Row label="Temperature" />);
    expect(screen.getByText(/Temperature:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Feels like/i)).toBeNull();
  });

  it("does not render the value or extra text if they are empty strings", () => {
    render(<Row label="Temperature" value="" extra="" />);
    const rowElement = screen.getByText(/Temperature:/i);
    expect(rowElement).toBeInTheDocument();
    expect(rowElement).toHaveTextContent("Temperature:");
  });

  it("renders correctly with numeric value", () => {
    render(<Row label="Temperature" value={20} />);
    expect(screen.getByText(/Temperature:/i)).toBeInTheDocument();
    expect(screen.getByText(/20/i)).toBeInTheDocument();
  });
});
