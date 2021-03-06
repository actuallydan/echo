import React, { useEffect, useGlobal, setGlobal, useState } from "reactn";
import Input from "../components/Input";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import { defaultState } from "../utils/data";
import { X } from "react-feather";

import Fieldset from "../components/Fieldset";
import GunTableLabel from "../components/GunTableLabel";
import GunDisplay from "../components/GunDisplay";
import GunSmith from "../components/GunSmith";

export default function Config(props) {
  const [state, setState] = useState(JSON.parse(localStorage.getItem('BL_Backup')) || {
    hp: 20,
    sp: 10,
    dex: 0,
    prof: 0
  });

  const [hasBeenUpdated, setHasBeenUpdated] = useState(false);

  const [global] = useGlobal();
  const [theme, setTheme] = useGlobal("theme");
  const [guns, setGuns] = useGlobal("guns");

  const [sp] = useGlobal("sp");
  const [hp] = useGlobal("hp");
  const [dex] = useGlobal('dex');
  const [prof] = useGlobal('prof');

  const history = useHistory();

  const updateGlobalStatus = () => {
    setGlobal({
      // guns,
      theme,
      hp: state.hp,
      sp: state.sp,
      dex: state.dex,
      prof: state.prof,
      healthRemaining: state.hp,
      shieldRemaining: state.sp,
    });

    setHasBeenUpdated(true);
  };

  // after updating hp and sp, update backup
  useEffect(() => {
    const backup = JSON.stringify(global);
    localStorage.setItem("BL_Backup", backup);
  }, [hp, sp, prof, dex]);

  // navigate to app after update
  useEffect(() => {
    if (hasBeenUpdated) {
      history.push("/app");
    }
  }, [hasBeenUpdated]);

  const updateValue = (e) => {
    const newState = state;
    newState[e.currentTarget.name] = parseInt(e.currentTarget.value, 10);
    setState({ ...newState });
  };

  const updateTheme = (e) => {
    const val = e.currentTarget.value;

    setTheme(val);
  };

  const labeStyles = {
    color: theme,
  };

  const reset = () => {
    setGlobal(defaultState);
    localStorage.removeItem("BL_Backup");
  };

  const deleteItem = (e) => {
    const id = e.currentTarget.getAttribute("data-id");

    const newGunsList = guns.filter((g) => g.id !== id);

    setGuns(newGunsList);
  };

  const onNewGun = (newGun) => {
    setGuns([...guns, newGun]);
  }
  return (
    <div>
      <div className="section row between">
        <div className="column center">
          <Input onChange={updateValue} value={state.hp} name="hp" />
          <div style={labeStyles}>Hitpoints</div>
        </div>
        <div className="column center">
          <Input onChange={updateValue} value={state.sp} name="sp" />
          <div style={labeStyles}>Shield Power</div>
        </div>
        <div className="column center">
          <Input onChange={updateValue} value={state.dex} name="dex" />
          <div style={labeStyles}>Dexterity</div>
        </div>
        <div className="column center">
          <Input onChange={updateValue} value={state.prof} name="prof" />
          <div style={labeStyles}>Proficiency</div>
        </div>
      </div>
      <Fieldset label={"Color Theme"}>
        <input
          className="input color-picker"
          type="color"
          onChange={updateTheme}
          value={theme}
          style={{
            boxShadow: "inset 0px 0px 0.1em " + theme,
            filter: `drop-shadow(0px 0px 0.5em ${theme})`,
            border: `3px solid ${theme}`,
          }}
        />
      </Fieldset>
      <Fieldset label={"Manage Guns"}>
        <GunSmith onNewGun={onNewGun} />
        <div className="gunRowWrapper">
          <GunTableLabel hideDamage hideAttack />
          <X className="delete-gun" color={"transparent"} />
        </div>
        {guns &&
          guns.map((gun) => (
            <div key={gun.id} className="gunRowWrapper">
              <GunDisplay hideDamage hideAttack gun={gun} />
              <X
                className="delete-gun"
                onClick={deleteItem}
                color={theme}
                data-id={gun.id}
              />
            </div>
          ))}
      </Fieldset>

      <div className="section">
        <Button label={"save"} onClick={updateGlobalStatus} />
      </div>
      <div className="section">
        <Button label={"clear"} color={"#F44336"} onClick={reset} />
      </div>
    </div>
  );
}
