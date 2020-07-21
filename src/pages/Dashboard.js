import React, { useGlobal } from "reactn";
import Button from "../components/Button";
import StatusBar from "../components/StatusBar";
import HealDamage from "../components/HealDamage";

export default function Dashboard(props) {
  const [sp] = useGlobal("sp");
  const [hp] = useGlobal("hp");
  const [shieldRemaining, setShieldRemaining] = useGlobal("shieldRemaining");
  const [healthRemaining, setHealthRemaining] = useGlobal("healthRemaining");

  const regen = (shouldRegenShield) => {
    shouldRegenShield ? setShieldRemaining(sp) : setHealthRemaining(hp);
  };

  return (
    <div>
      {/* SP */}
      <StatusBar blue total={sp} remaining={shieldRemaining} regen={regen} />
      {/* HP */}
      <StatusBar total={hp} remaining={healthRemaining} regen={regen} />

      {/* Damage/Heal */}
      <HealDamage />
    </div>
  );
}
