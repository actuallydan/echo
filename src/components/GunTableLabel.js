import React, { useGlobal } from "reactn";

export default function GunTableLabel({ hideDamage = false }) {
  const [theme] = useGlobal("theme");

  const labelStyles = {
    color: theme,
  };

  const headerStyle = {
    borderBottom: `1px solid ${theme}`,
  };

  return (
    <div className="row gunRow gunTableLabel" style={headerStyle}>
      <div className="column">
        <div style={labelStyles}>Name</div>
      </div>
      <div className="column">
        <div style={labelStyles}>Range</div>
      </div>
      <div className="column">
        <div style={labelStyles}>Damage</div>
      </div>
      {!hideDamage && (
        <div className="column">
          <div style={labelStyles}>Last Roll</div>
        </div>
      )}
    </div>
  );
}
