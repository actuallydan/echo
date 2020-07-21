import React from "react";

export default function StatusBar({
  blue = false,
  total = 10,
  remaining = 10,
  ...props
}) {
  const styles = {
    width: ((remaining / total) * 100).toFixed(2) + "%",
    background: blue ? "#00dffc" : "#FF0000",
  };

  const regen = () => {
    props.regen(blue);
  };

  return (
    <div>
      <fieldset onClick={regen}>
        <legend>{remaining}</legend>
        <div className="statusBarInner" style={styles}></div>
      </fieldset>
    </div>
  );
}
