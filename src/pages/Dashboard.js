import React, { useGlobal, useEffect, setGlobal } from "reactn";
import StatusBar from "../components/StatusBar";
import HealDamage from "../components/HealDamage";

import GunTableLabel from "../components/GunTableLabel";
import GunDisplay from "../components/GunDisplay";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import { Clipboard } from "react-feather";

export default function Dashboard() {
  const [sp] = useGlobal("sp");
  const [hp] = useGlobal("hp");
  const [dex] = useGlobal("dex");
  const [prof] = useGlobal("prof");
  const [guns] = useGlobal("guns");
  const [theme] = useGlobal('theme');
  const [shieldRemaining, setShieldRemaining] = useGlobal("shieldRemaining");
  const [healthRemaining, setHealthRemaining] = useGlobal("healthRemaining");

  const [global] = useGlobal();

  const hitBonus = prof + dex;
  const base64backup = btoa(JSON.stringify(global));
  console.log(base64backup)
  const regen = (shouldRegenShield) => {
    shouldRegenShield ? setShieldRemaining(sp) : setHealthRemaining(hp);
  };

  useEffect(() => {
    console.log(global)
  }, [global])

  useEffect(() => {
    const backup = JSON.stringify(global);
    localStorage.setItem("BL_Backup", backup);
  }, [shieldRemaining, healthRemaining]);

  const copyText = () => {
    navigator.clipboard.writeText(base64backup).then(function () {
      /* clipboard successfully set */
      alert("copied to clipboard")
    }, function () {
      /* clipboard write failed */
    });
  }

  const handlePaste = (e) => {
    // take base64 string
    const string = e.clipboardData.getData('Text');
    console.log(string);
    // convert to utf-8
    let obj = atob(string)
    obj = JSON.parse(obj)

    if (!obj.hasOwnProperty("theme")) {
      // probably got malformed, abort
      return;
    }

    setGlobal(obj);

    // update local storage
    window.localStorage.setItem("BL_Backup", JSON.stringify(obj))
  }

  const onClickSelect = (e) => {
    e.currentTarget.select();
  }

  return (
    <div id="dashboard">
      <Fieldset label={"Health & Shields"}>
        {/* SP */}
        <StatusBar blue total={sp} remaining={shieldRemaining} regen={regen} />
        {/* HP */}
        <StatusBar total={hp} remaining={healthRemaining} regen={regen} />

        {/* Damage/Heal */}
        <HealDamage />
      </Fieldset>

      <Fieldset label={"Guns"}>
        <GunTableLabel />
        {guns && guns.map((gun) => <GunDisplay key={gun.id} gun={gun} hitBonus={hitBonus} />)}
      </Fieldset>

      <div className="row">
        <Input
          defaultValue={base64backup}
          style={{ cursor: "pointer", width: "-webkit-fill-available" }}
          onPaste={handlePaste}
          onClick={onClickSelect}
        />
        <Clipboard
          onClick={copyText}
          color={theme}
          style={{ marginLeft: "1em", marginRight: "1em", alignSelf: "center", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
