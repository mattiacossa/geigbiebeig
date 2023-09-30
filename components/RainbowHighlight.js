import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children }) => {
  const animationDuration = Math.floor(30 * children.length);
  const animationDelay = 500; // Set the delay here

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      animationDelay={animationDelay} // Pass the delay as a prop
      color={color}
    >
      {children}
    </RoughNotation>
  );
};

