import React, { useGlobal, useState } from "reactn";

import GunTableLabel from "../components/GunTableLabel";
import GunDisplay from "../components/GunDisplay";
import Fieldset from "../components/Fieldset";
import GunSmith from "../components/GunSmith";
import { X } from "react-feather";

export default function Dashboard(props) {
  const [myGuns] = useGlobal('guns');
  const [dex] = useGlobal('dex');
  const [prof] = useGlobal('prof');

  const hitBonus = dex + prof;

  myGuns.forEach((g, i) => {
    myGuns[i] = { ...g, mine: true }
  })

  const [guns, setGuns] = useState(myGuns || []);
  const [theme] = useGlobal("theme");

  // const [damage, setDamage] = useState(null);
  // const [avgDmg, setAvgDmg] = useState({
  //   pistol: [],
  //   assault_rifle: [],
  //   sniper_rifle: [],
  //   shotgun: [],
  //   rocket_launcher: [],
  //   submachine_gun: [],
  // });

  const onNewGun = (newGun) => {
    setGuns([...guns, newGun]);
  }

  const deleteItem = (e) => {
    const id = e.currentTarget.getAttribute("data-id");

    const newGunsList = guns.filter((g) => g.id !== id);

    setGuns(newGunsList);
  };

  return (
    <>
      <Fieldset label={"Buncha Guns Over Here"}>
        <GunSmith onNewGun={onNewGun} />
        <div className="gunRowWrapper">
          <GunTableLabel />
          <X className="delete-gun" color={"transparent"} />
        </div>
        {guns &&
          guns.map((gun) => (
            <div key={gun.id} className="gunRowWrapper">
              <GunDisplay gun={gun} hitBonus={hitBonus} />
              <X
                className="delete-gun"
                onClick={gun.mine ? () => { } : deleteItem}
                color={gun.mine ? "transparent" : theme}
                data-id={gun.id}
              />
            </div>
          ))}
      </Fieldset>

      {/* {damage ? (
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
      </div> */}
      {/* <Button onClick={shoot} label={"Button"} /> */}
    </>
  );
}
