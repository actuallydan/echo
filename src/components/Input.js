import React, { useGlobal } from "reactn";

export default function Input({
  value = 0,
  color,
  onChange,
  style = {},
  ...props
}) {
  const [theme] = useGlobal("theme");

  const btnColor = color || theme || "#00DFFE";
  const styles = {
    border: "2px solid " + btnColor,
    color: btnColor,
    ...style,
  };

  return (
    <input
      className="input"
      type="number"
      onChange={onChange}
      style={styles}
      value={value}
      {...props}
    />
  );
}
