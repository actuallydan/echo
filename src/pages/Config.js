import React, { useEffect, useGlobal, setGlobal, useState } from "reactn";
import Input from "../components/Input";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import { defaultState } from "../utils/data";

export default function Config(props) {
  const [state, setState] = useState({
    hp: 20,
    sp: 10,
  });
  const [theme, setTheme] = useGlobal("theme");
  const [global] = useGlobal();

  const [hasBeenUpdated, setHasBeenUpdated] = useState(false);
  const history = useHistory();

  const [sp] = useGlobal("sp");
  const [hp] = useGlobal("hp");

  useEffect(() => {
    //   if local data exists hydrate our store with it
    if (localStorage && localStorage.getItem("BL_Backup")) {
      const backup = JSON.parse(localStorage.getItem("BL_Backup"));
      setState({
        ...backup,
      });
    }
  }, []);

  const updateGlobalStatus = () => {
    setGlobal({
      hp: state.hp,
      sp: state.sp,
    });

    setHasBeenUpdated(true);
  };

  // after updating hp and sp, update backup
  useEffect(() => {
    console.log(global);
    const backup = JSON.stringify(global);
    localStorage.setItem("BL_Backup", backup);
  }, [hp, sp]);

  // navigate to app after update
  useEffect(() => {
    if (hasBeenUpdated) {
      history.push("/app");
    }
  }, [hasBeenUpdated]);

  const updateValue = (e) => {
    const newState = { ...state };
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
      </div>
      <div className="section">
        <div style={labeStyles}>Color Theme</div>
        <input
          className="input color-picker"
          type="color"
          onChange={updateTheme}
          defaultValue={theme}
          value={theme}
          style={{
            boxShadow: "inset 0px 0px 0.1em " + theme,
            filter: `drop-shadow(0px 0px 0.5em ${theme})`,
            border: `3px solid ${theme}`,
          }}
        />
      </div>
      <div className="section">
        <Button label={"save"} onClick={updateGlobalStatus} />
      </div>
      <div className="section">
        <Button label={"clear"} color={"#F44336"} onClick={reset} />
      </div>
    </div>
  );
}
