import React, { useState, useEffect } from "react";

const TypeWriter = ({ children, typing = 0.5 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const text = typeof children === "string" ? children : "";

  useEffect(() => {
    if (!text) {
      setDisplayedText("");
      return;
    }

    setDisplayedText("");
    let index = 0;
    const delay = Math.max(20, Math.floor(50 / (typing || 1)));

    const interval = setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, typing]);

  return <span>{displayedText}</span>;
};

export default TypeWriter;
