import React from "react";

interface Props {
  message?: string;
}

export const Error = ({ message }: Props): React.ReactElement => (
  <div>Error!</div>
);
