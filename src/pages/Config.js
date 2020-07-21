import React, { useEffect, useGlobal, setGlobal, useState } from "reactn";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Config(props) {
  const [state, setState] = useState({ hp: 20, sp: 10 });
  const [theme, setTheme] = useGlobal("theme");
  const [global] = useGlobal();

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
  };

  // after updating hp and sp, update backup
  useEffect(() => {
    const backup = JSON.stringify(global);
    localStorage.setItem("BL_Backup", backup);
  }, [hp, sp]);

  const updateValue = (e) => {
    console.log(e.currentTarget.name, e.currentTarget.value);
    const newState = { ...state };
    newState[e.currentTarget.name] = parseInt(e.currentTarget.value, 10);

    setState({ ...newState });
  };

  const updateTheme = (e) => {
    const val = e.currentTarget.value;

    setTheme(val);
  };

  return (
    <div>
      <div className="section row between">
        <div className="column center">
          <Input onChange={updateValue} value={state.hp} name="hp" />
          <div>Hitpoints</div>
        </div>
        <div className="column center">
          <Input onChange={updateValue} value={state.sp} name="sp" />
          <div>Shield Power</div>
        </div>
      </div>
      <div className="section">
        <div>Color Theme</div>
        <input
          className="input"
          type="color"
          onChange={updateTheme}
          defaultValue={theme}
          style={{ padding: "0" }}
        />
      </div>
      <div className="section">
        <Button label={"save"} />
      </div>
    </div>
  );
}
