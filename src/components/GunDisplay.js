import React, { useGlobal } from "react";
import Button from "./Button";

export default function GunDisplay({
  gun: { type, brand, range, damage },
  ...props
}) {
  //   const [theme, setTheme] = useGlobal("theme");

  const bang = () => {};

  const theme = "#FFF";
  const labelStyles = {
    color: theme,
  };

  return (
    <div className="row between gunRow">
      <div className="column">
        <div style={labelStyles}>
          {type
            .replace("_", " ")
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </div>
        <div style={{ ...labelStyles, fontSize: "0.7em" }}>{brand}</div>
      </div>

      <div className="column">
        <div style={labelStyles}>{range} ft</div>
      </div>

      <div className="column">
        <Button
          label={damage}
          onClick={bang}
          color={theme}
          style={{ margin: 0 }}
        />
      </div>
    </div>
  );
}
