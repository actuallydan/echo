import React, { useState, useGlobal, setGlobal } from "reactn";
import { generateGun, calculateDamage } from "./utils/generate";

import Config from "./pages/Config";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import GunRange from "./pages/GunRange";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

setGlobal({
  theme: "#00DFFE",
  hp: 10,
  sp: 10,
  guns: null,
  shieldRemaining: 10,
  healthRemaining: 10,
});

function App() {
  return (
    <div className="App">
      <Router>
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
