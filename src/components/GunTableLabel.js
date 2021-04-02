import React, { useGlobal } from "reactn";

export default function GunTableLabel({ hideAttack = false }) {
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
      {!hideAttack && (
        <div className="column">
          <div style={labelStyles}>Attack</div>
        </div>
      )}
      <div className="column">
        <div style={labelStyles}>Damage</div>
      </div>
    </div>
  );
}
