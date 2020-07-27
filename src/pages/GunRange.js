import React, { useState } from "reactn";
import Button from "../components/Button";

import { generateGun, calculateDamage } from "../utils/generate";
import GunTableLabel from "../components/GunTableLabel";
import GunDisplay from "../components/GunDisplay";

export default function Dashboard(props) {
  const [gun, setGun] = useState(null);
  const [rarity, setRarity] = useState(1);
  const [damage, setDamage] = useState(null);
  const [avgDmg, setAvgDmg] = useState({
    pistol: [],
    assault_rifle: [],
    sniper_rifle: [],
    shotgun: [],
    rocket_launcher: [],
    submachine_gun: [],
  });

  const createRandomGun = () => {
    setGun(generateGun(rarity));
  };

  const updateRarity = (event) => {
    setRarity(event.target.value);
  };

  const shoot = () => {
    const getDamage = calculateDamage(gun);
    setDamage(getDamage);
    const newAvg = {
      ...avgDmg,
      [gun.type]: [...avgDmg[gun.type], getDamage],
    };

    setAvgDmg(newAvg);
  };

  return (
    <>
      <p>Select a rarity:</p>
      <div
        onChange={updateRarity}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {["Common", "Rare", "Epic", "Legendary"].map((r, i) => (
          <div style={{ display: "flex", flexDirection: "row" }} key={r}>
            <input type="radio" name="radio" value={i + 1} />
            <div>{r}</div>
          </div>
        ))}
      </div>
      <br />

      <Button onClick={createRandomGun} label={"Random Gun"} />
      <br />
      <br />

      <GunTableLabel />
      {gun && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <GunDisplay gun={gun} />

          <div>{"Brand : " + gun.brand}</div>
          <div>{"Type:   " + gun.type}</div>
          <div>{"Range:  " + gun.range + "ft"}</div>
          <div>{"Damage: " + gun.damage}</div>
          {gun.bonusDamage && (
            <div>{"Element: " + gun.bonusDamage + " " + gun.element}</div>
          )}
        </div>
      )}
      <br />
      {gun && <button onClick={shoot}>BANG!</button>}
      <br />

      {damage ? (
        <div key={Math.random()} className={"popOff"}>
          {damage}
        </div>
      ) : null}

      <div>
        Average Damage:
        {avgDmg["pistol"].length ? (
          <div>
            {"pistol:  " +
              avgDmg["pistol"].reduce((d, agg) => (agg += d)) /
                avgDmg["pistol"].length}
          </div>
        ) : null}
        {avgDmg["assault_rifle"].length ? (
          <div>
            {"assault_rifle: " +
              avgDmg["assault_rifle"].reduce((d, agg) => (agg += d)) /
                avgDmg["assault_rifle"].length}
          </div>
        ) : null}
        {avgDmg["sniper_rifle"].length ? (
          <div>
            {"sniper_rifle:  " +
              avgDmg["sniper_rifle"].reduce((d, agg) => (agg += d)) /
                avgDmg["sniper_rifle"].length}
          </div>
        ) : null}
        {avgDmg["shotgun"].length ? (
          <div>
            {"shotgun: " +
              avgDmg["shotgun"].reduce((d, agg) => (agg += d)) /
                avgDmg["shotgun"].length}
          </div>
        ) : null}
        {avgDmg["rocket_launcher"].length ? (
          <div>
            {"rocket_launcher: " +
              avgDmg["rocket_launcher"].reduce((d, agg) => (agg += d)) /
                avgDmg["rocket_launcher"].length}
          </div>
        ) : null}
        {avgDmg["submachine_gun"].length ? (
          <div>
            {"submachine_gun: " +
              avgDmg["submachine_gun"].reduce((d, agg) => (agg += d)) /
                avgDmg["submachine_gun"].length}
          </div>
        ) : null}
      </div>
      <Button onClick={shoot} label={"Button"} />
    </>
  );
}
