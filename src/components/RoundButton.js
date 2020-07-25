import React, { useState, useGlobal, setGlobal, useEffect } from "reactn";

export default function RoundButton({
  active = false,
  label,
  data,
  onClick,
  ...props
}) {
  const [theme] = useGlobal("theme");

  const btnStyles = {
    border: `2px solid ${theme}`,
    color: active ? "#222222" : theme,
    backgroundColor: active ? theme : "transparent",
  };

  const handleOnClick = () => {
    onClick(data);
  };

  return (
    <button className="roundButton" style={btnStyles} onClick={handleOnClick}>
      {label || ""}
    </button>
  );
}
