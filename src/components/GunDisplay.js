import React, { useGlobal, useState } from "react";
import Button from "./Button";
import { calculateDamage } from "../utils/generate";

export default function GunDisplay({
  gun: { type, brand, range, damage, rarity, element, bonusDamage },
  hideDamage = false,
  ...props
}) {
  // const [theme, setTheme] = useGlobal("theme");
  const [damageInst, setDamageInst] = useState(null);
  const [fire, setFire] = useState(0);

  console.log({ type, brand, range, damage, rarity, element, bonusDamage });

  const bang = () => {
    const getDamage = calculateDamage({
      type,
      brand,
      range,
      damage,
      rarity,
      element,
      bonusDamage,
    });

    setDamageInst(getDamage);
    setFire(fire + 1);
  };

  const colorsByRarity = ["#FFFFFF", "#00FF00", "#00DFFE", "#ffc107"];
  const color = colorsByRarity[rarity - 1];
  // console.log(rarity, color);

  const labelStyles = {
    color,
  };

  const elementMap = {
    fire: "#FF5050",
    lightning: "#0030FF",
    cold: "#00dffe",
    force: "yellow",
    necrotic: "green",
  };

  const elementColor = element ? elementMap[element] : null;

  const elementStyles = {
    color: elementColor,
    marginLeft: "0.5em",
  };
  return (
    <div className="row gunRow">
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
        <div className="row">
          <Button
            label={damage}
            onClick={bang}
            color={color}
            style={{ margin: 0 }}
          />
          {element && <div style={elementStyles}>+{bonusDamage}</div>}
        </div>
      </div>
      {!hideDamage && (
        <div className="column">
          {damageInst && (
            <div key={fire} className={"popOff"} style={labelStyles}>
              {damageInst}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
