import React from "react";
import { ButtonProps } from "./Button";

const Navigation = ({ size, onClick }: ButtonProps) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const styles: React.CSSProperties = {
    backgroundColor: "#67615D",
    borderRadius: "8px",
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    color: "white",
    display: "inline-block",
    cursor: "pointer",
  };
  return (
    <div style={styles} onClick={onClick}>
      길안내
    </div>
  );
};

export default Navigation;
