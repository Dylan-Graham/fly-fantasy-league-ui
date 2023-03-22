import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Login";
import { Leaderboard } from "./Leaderboard";
import { NavBar } from "./NavBar";
import { Account } from "./Account";
import { UserContext } from "../context";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NoMatchRoute } from "./NoMatchRoute";
import { Pick } from "./Pick";

function App() {
  const { isAuthenticated } = useAuth0();
  const [user, setUser] = useState<any>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className="content">
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route
                path="/"
                element={
                  <Login
                    loginLoading={loginLoading}
                    loginLoadingChanger={setLoginLoading}
                  />
                }
              />
              {isAuthenticated && (
                <Route path="/leaderboard" element={<Leaderboard />} />
              )}
              {isAuthenticated && <Route path="/picks" element={<Pick />} />}
              {isAuthenticated && (
                <Route path="/account" element={<Account />} />
              )}
              <Route path="*" element={<NoMatchRoute />} />
            </Routes>
          </UserContext.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;
