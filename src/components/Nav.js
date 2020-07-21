import React, { useGlobal } from "reactn";
import { useHistory } from "react-router-dom";
import { Activity, Sun, Settings } from "react-feather";

export default function Nav(props) {
  const [theme] = useGlobal("theme");
  const history = useHistory();

  // navigate
  const navigate = (e) => {
    const dest = e.currentTarget.getAttribute("data-dest");
    console.log(history, dest);
    history.push(dest);
  };

  const textLabelStyles = {
    color: theme,
  };

  return (
    <div className="row around nav">
      <div className="column center">
        <Activity data-dest={"/app"} onClick={navigate} color={theme} />
        <div className="navLabel" style={textLabelStyles}>
          Stats
        </div>
      </div>
      <div className="column center">
        <Settings data-dest={"/config"} onClick={navigate} color={theme} />
        <div className="navLabel" style={textLabelStyles}>
          Settings
        </div>
      </div>
      <div className="column center">
        <Sun data-dest={"/guns"} onClick={navigate} color={theme} />
        <div className="navLabel" style={textLabelStyles}>
          Guns
        </div>
      </div>
    </div>
  );
}
