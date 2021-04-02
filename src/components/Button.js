import React, { useGlobal } from "reactn";

export default function Button({ label = "Button", onClick, color, className = "", ...props }) {
  const [theme] = useGlobal("theme");

  const btnColor = color || theme || "#00DFFE";
  const styles = {
    border: "2px solid " + btnColor,
    color: btnColor,
    boxShadow: "inset 0px 0px 0.1em " + btnColor,
    filter: `drop-shadow(0px 0px 0.5em ${btnColor})`,
  };

  return (
    <div {...props} onClick={onClick} className={`button ${className}`} style={styles}>
      {label}
    </div>
  );
}
