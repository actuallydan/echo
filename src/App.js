import React, { useState, useGlobal, setGlobal, useEffect } from "reactn";
import { generateGun, calculateDamage } from "./utils/generate";
import Nav from "./components/Nav";

import Config from "./pages/Config";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import GunRange from "./pages/GunRange";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { defaultState } from "./utils/data";

import "./App.css";

// initialize with default data
setGlobal(defaultState);

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [globalState] = useGlobal();
  useEffect(() => {
    //   if local data exists hydrate our store with it
    if (localStorage && localStorage.getItem("BL_Backup")) {
      const backup = JSON.parse(localStorage.getItem("BL_Backup"));
      setGlobal({
        ...backup,
      });
    }

    setHasLoaded(true);

    const backuper = setInterval(() => {
      const backup = JSON.stringify(globalState);
      localStorage.setItem("BL_Backup", backup);
    }, 20000);

    return () => {
      clearTimeout(backuper);
    };
  }, []);

  return (
    <div className="App">
      {hasLoaded ? (
        <Router>
          <Nav />
          <Switch>
            <Route path="/config">
              <Config />
            </Route>
            <Route path="/app">
              <Dashboard />
            </Route>
            <Route path="/guns">
              <GunRange />
            </Route>
          </Switch>
        </Router>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
