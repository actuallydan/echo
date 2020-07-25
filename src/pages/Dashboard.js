import React, { useGlobal, useEffect } from "reactn";
import StatusBar from "../components/StatusBar";
import HealDamage from "../components/HealDamage";

import GunTableLabel from "../components/GunTableLabel";
import GunDisplay from "../components/GunDisplay";
import Fieldset from "../components/Fieldset";

export default function Dashboard(props) {
  const [sp] = useGlobal("sp");
  const [hp] = useGlobal("hp");
  const [guns] = useGlobal("guns");
  const [theme] = useGlobal("theme");
  const [shieldRemaining, setShieldRemaining] = useGlobal("shieldRemaining");
  const [healthRemaining, setHealthRemaining] = useGlobal("healthRemaining");

  const [global] = useGlobal();

  const regen = (shouldRegenShield) => {
    shouldRegenShield ? setShieldRemaining(sp) : setHealthRemaining(hp);
  };

  const fieldSetStyles = {
    border: `1px solid ${theme}`,
    padding: "1em",
    marginBottom: "2em",
  };
  const legendStyles = {
    color: theme,
  };

  useEffect(() => {
    const backup = JSON.stringify(global);
    localStorage.setItem("BL_Backup", backup);
  }, [shieldRemaining, healthRemaining]);

  return (
    <div id="dashboard">
      <Fieldset
        className="fieldsetSection"
        style={fieldSetStyles}
        label={"Health & Shields"}
      >
        {/* SP */}
        <StatusBar blue total={sp} remaining={shieldRemaining} regen={regen} />
        {/* HP */}
        <StatusBar total={hp} remaining={healthRemaining} regen={regen} />

        {/* Damage/Heal */}
        <HealDamage />
      </Fieldset>

      <Fieldset
        className="fieldsetSection"
        style={fieldSetStyles}
        label={"Guns"}
      >
        <GunTableLabel />
        {guns && guns.map((gun) => <GunDisplay id={gun.id} gun={gun} />)}
      </Fieldset>
    </div>
  );
}
