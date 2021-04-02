import React, { useGlobal } from "reactn";

export default function Input({
  value = null,
  color,
  onChange,
  style = {},
  ...props
}) {
  const [theme] = useGlobal("theme");

  const inputColor = color || theme || "#00DFFE";
  const styles = {
    border: "2px solid " + inputColor,
    color: inputColor,
    boxShadow: "inset 0px 0px 1em " + inputColor,
    filter: `drop-shadow(0px 0px 0.2em ${inputColor}20)`,
    ...style,
  };

  return (
    <input
      className="input"
      onChange={onChange}
      style={styles}
      value={value}
      {...props}
    />
  );
}
