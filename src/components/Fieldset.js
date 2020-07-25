import React, { useGlobal } from "reactn";

export default function Fieldset({ children, label }) {
  const [theme] = useGlobal("theme");

  const fieldSetStyles = {
    border: `1px solid ${theme}`,
    padding: "1em",
    marginBottom: "2em",
  };
  const legendStyles = {
    color: theme,
  };

  return (
    <fieldset className="fieldsetSection" style={fieldSetStyles}>
      <legend style={legendStyles}>{label}</legend>
      {children}
    </fieldset>
  );
}
