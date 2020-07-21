const classes = [
  { type: "pistol", damage: "2d6", range: 40 },
  { type: "assault_rifle", damage: "2d10", range: 60 },
  { type: "sniper_rifle", damage: "1d12", range: 200 },
  { type: "shotgun", damage: "4d4", range: 20 },
  { type: "rocket_launcher", damage: "2d20", range: 60 },
  { type: "submachine_gun", damage: "3d4", range: 40 }
];

const brands = [
  "Dahl",
  "Hyperion",
  "Jakobs",
  "Maliwan",
  "Tediore",
  "Torgue",
  "Vladof"
];

const elements = ["fire", "lightning", "cold", "force", "necrotic"];

export function generateGun(
  rarity = 1,
  classType = null,
  brand = null,
  element
) {
  rarity = parseInt(rarity, 10);

  // class (rifle, pistol, shotgun etc)
  const uniformSample = n => {
    return (Math.random() * (n + 1) + (n - 1)) | 0;
  };

  let gun = classType || classes[Math.floor(Math.random() * 6)];

  // brand
  gun.brand = brand || brands[Math.floor(Math.random() * 7)];

  // additional damage
  let [newDamageCount, dieType] = gun.damage.split("d");
  newDamageCount = parseInt(newDamageCount, 10) + rarity - 1;
  gun.damage = newDamageCount + "d" + dieType;

  // range
  gun.range = gun.range + uniformSample(rarity - 1) * 10;

  // attack roll bonus (+1 weapon etc.)
  gun.rollBonus = rarity;

  // bonus damage
  gun.bonusDamage =
    gun.brand === "Jakobs"
      ? null
      : Math.random() > 0.8 || gun.brand === "Maliwan"
      ? "d6"
      : null;

  // number of bonus damage dice
  if (gun.bonusDamage) {
    gun.bonusDamage = uniformSample(rarity + 1) + gun.bonusDamage;
    gun.element =
      gun.element !== "Torgue"
        ? elements[Math.floor(Math.random() * 7)]
        : "force";
  }

  return gun;
}

export function calculateDamage(gun) {
  const roll = d => Math.floor(Math.random() * d) + 1;

  let dmg = 0;
  const [quantity, d] = gun.damage.split("d");

  for (let i = 0; i < quantity; i++) {
    dmg += roll(d);
  }
  if (gun.bonusDamage) {
    const [quantity2, d2] = gun.bonusDamage.split("d");

    for (let i = 0; i < quantity2; i++) {
      dmg += roll(d2);
    }
  }
  return dmg;
}
