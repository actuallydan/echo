import React, { useState, useEffect } from "react";
import Button from "./Button";
import { calculateDamage } from "../utils/generate";

export default function GunDisplay({
  gun: { type, brand, range, damage, rarity, element, bonusDamage },
  hideDamage = false,
  hideAttack = false,
  hitBonus = 0
}) {
  const [damageInst, setDamageInst] = useState(null);
  const [fire, setFire] = useState(0);


  const [attackInst, setAttackInst] = useState(null);
  const [att, setAtt] = useState(0);

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

  useEffect(() => {
    let timer = null;
    if (attackInst) {
      timer = setTimeout(() => {
        setDamageInst(null);
      }, 2000)
    }

    return () => clearTimeout(timer)
  }, [damageInst])

  const rollAttack = () => {
    let roll = Math.floor(Math.random() * 20 + 1)

    if (roll === 20) {
      alert("Natural 20!")
    }

    roll += hitBonus + (rarity - 1)

    setAttackInst(roll);
    setAtt(att + 1);

  };

  useEffect(() => {
    let timer = null;
    if (attackInst) {
      timer = setTimeout(() => {
        setAttackInst(null);
      }, 2000)
    }

    return () => clearTimeout(timer)
  }, [attackInst])


  const colorsByRarity = ["#FFFFFF", "#00FF00", "#00DFFE", "#ffc107"];
  const color = colorsByRarity[rarity - 1];

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
      {!hideAttack && (
        <div className="column">
          <div className="row">
            <Button
              key={att}
              label={attackInst || "+" + (hitBonus + (rarity - 1))}
              onClick={rollAttack}
              color={color}
              style={{ margin: 0 }}
              className="popOff"
            />
          </div>
        </div>
      )}

      <div className="column">
        <div className="row">
          <Button
            key={fire}
            label={damageInst || damage}
            onClick={!hideDamage && bang}
            color={color}
            style={{ margin: 0 }}
            className="popOff"

          />
          {element && <div style={elementStyles}>+{bonusDamage}</div>}
        </div>
      </div>
    </div>
  );
}
