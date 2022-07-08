import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const DarkLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Drak Layout</h3>
      {children}
    </div>
  );
};
