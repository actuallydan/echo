import React, {
  useState,
  useGlobal,
  setGlobal,
  useEffect,
  lazy,
  Suspense,
} from "reactn";

import Nav from "./components/Nav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { defaultState } from "./utils/data";
import ScaleLoader from "@bit/davidhu2000.react-spinners.scale-loader";

import "./App.css";

const Config = lazy(() => import("./pages/Config"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const GunRange = lazy(() => import("./pages/GunRange"));

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
  }, []);

  return (
    <div className="App">
      {hasLoaded ? (
        <Router>
          <Suspense
            fallback={
              <div className="column center" style={{ height: "100vh" }}>
                <ScaleLoader
                  height={90}
                  width={10}
                  color={globalState.theme || "#6b5ce7"}
                />
              </div>
            }
          >
            <Nav />
            <Switch>
              <Route path="/config">
                <Config />
              </Route>
              <Route path="/guns">
                <GunRange />
              </Route>
              <Route>
                <Dashboard />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      ) : (
        <div className="column center" style={{ height: "100vh" }}>
          <ScaleLoader
            height={90}
            width={10}
            color={globalState.theme || "#6b5ce7"}
          />
        </div>
      )}
    </div>
  );
}

export default App;
