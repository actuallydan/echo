import React from "react";

export default function StatusBar({
  blue = false,
  total = 10,
  remaining = 10,
  ...props
}) {
  const color = blue ? "#00dffc" : "#F44336";

  const styles = {
    width: ((remaining / total) * 100).toFixed(2) + "%",
    background: color,
  };

  const fieldsetStyles = {
    borderColor: blue ? "#00dffc" : "#F44336",
    boxShadow: "inset 0px 0px 1em " + color,
    filter: `drop-shadow(0px 0px ${(remaining / total) * 0.5 + "em"} ${color})`,
  };

  const regen = () => {
    props.regen(blue);
  };

  return (
    <div>
      <fieldset
        className="statusBarFieldSet"
        onClick={regen}
        style={fieldsetStyles}
      >
        <legend className="legend textBorder">{remaining}</legend>
        <div className="statusBarInner" style={styles}></div>
      </fieldset>
    </div>
  );
}
