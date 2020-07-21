import React, { useGlobal } from "reactn";

export default function Button({ label = "Button", onClick, color, ...props }) {
  const [theme] = useGlobal("theme");

  const btnColor = color || theme || "#00DFFE";
  const styles = {
    border: "2px solid " + btnColor,
    color: btnColor,
  };

  return (
    <div onClick={onClick} className="button" style={styles}>
      {label}
    </div>
  );
}
