import React, { useEffect, useState, useGlobal } from "reactn";
import Button from "./Button";
import Input from "./Input";

export default function HealDamage(props) {
  const [shieldRemaining, setShieldRemaining] = useGlobal("shieldRemaining");
  const [sp] = useGlobal("sp");
  const [hp] = useGlobal("hp");

  const [healthRemaining, setHealthRemaining] = useGlobal("healthRemaining");
  const [amount, setAmount] = useState(0);

  const doDamage = () => {
    const amt = parseInt(amount, 10);

    let amountLeft = amt;

    // if damage done is excessive (double total sp) we still do health damage
    if (amountLeft > sp * 2) {
      amountLeft = amountLeft - sp * 2;
      setShieldRemaining(0);

      setHealthRemaining(
        amountLeft >= healthRemaining ? 0 : healthRemaining - amountLeft
      );
      amountLeft = 0;
    }

    // return early if need be
    if (amountLeft <= 0) {
      return;
    }

    // first do damage to shield, then hp if none available
    if (shieldRemaining > 0) {
      setShieldRemaining(
        amountLeft >= shieldRemaining ? 0 : shieldRemaining - amountLeft
      );
    } else {
      setHealthRemaining(
        amountLeft >= healthRemaining ? 0 : healthRemaining - amountLeft
      );
    }
  };

  useEffect(() => {
    setAmount(0);
  }, [healthRemaining, shieldRemaining]);

  const updateAmount = (e) => {
    setAmount(e.currentTarget.value);
  };

  const addHealth = () => {
    const amt = parseInt(amount, 10);

    if (healthRemaining + amt >= hp) {
      setHealthRemaining(hp);
    } else {
      setHealthRemaining(healthRemaining + amt);
    }
  };

  const inputStyles = { marginLeft: "1em", marginRight: "1em" };
  return (
    <div className="row center">
      <Button onClick={doDamage} label={"-"} color={"#FF0000"} />
      <Input value={amount} onChange={updateAmount} style={inputStyles} />
      <Button onClick={addHealth} label={"+"} color={"#09ff9b"} />
    </div>
  );
}
