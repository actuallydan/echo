import React, { useState, useGlobal } from "reactn";
import RoundButton from "./RoundButton";
import { generateGun } from "../utils/generate";

export default function GunSmith({ onNewGun }) {
  const [theme] = useGlobal("theme");
  const [activeType, setActiveType] = useState("pistol");
  const [activeRarity, setActiveRarity] = useState(0);
  // const [guns, setGuns] = useGlobal("guns");

  const btnStyles = {
    border: `2px solid ${theme}`,
    color: theme,
    backgroundColor: "transparent",
  };

  const types = [
    "pistol",
    "assault_rifle",
    "sniper_rifle",
    "shotgun",
    "rocket_launcher",
    "submachine_gun",
  ];

  const rarities = ["Common", "Rare", "Epic", "Legendary"];

  const typeMap = {
    pistol: "Pistol",
    assault_rifle: "Assault",
    sniper_rifle: "Sniper",
    shotgun: "Shotgun",
    rocket_launcher: "Rocket",
    submachine_gun: "SMG",
  };

  const addGun = () => {
    const newGun = generateGun(activeRarity + 1, activeType, null, null);
    // setGuns([...guns, newGun]);
    onNewGun(newGun)
  };

  return (
    <div id="gunSmith">
      <div className="gunSmithRow">
        <button className="roundButton" style={btnStyles} onClick={addGun}>
          +
        </button>
        <div className="scrollRow">
          {types.map((t) => (
            <RoundButton
              key={t}
              data={t}
              onClick={setActiveType}
              active={activeType === t}
              label={typeMap[t]}
            />
          ))}
        </div>
      </div>

      <div className="wrapRow">
        {rarities.map((r, i) => (
          <RoundButton
            key={r}
            data={i}
            onClick={setActiveRarity}
            active={activeRarity === i}
            label={r}
          />
        ))}
      </div>
    </div>
  );
}
