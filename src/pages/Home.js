import React, { useEffect, setGlobal } from "reactn";
import { useHistory } from "react-router-dom";

export default function Dashboard(props) {
  let history = useHistory();

  // check for existing data on load
  useEffect(() => {
    //   if local data exists hydrate our store with it
    if (localStorage && localStorage.getItem("BL_Backup")) {
      const backup = JSON.parse(localStorage.getItem("BL_Backup"));
      setGlobal({
        ...backup,
      });
      history.push("/app");
    } else {
      history.push("/config");
    }
  }, []);

  return "Loading...";
}
