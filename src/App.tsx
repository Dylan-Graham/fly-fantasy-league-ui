import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/homepage/LoginPage";
import { NavBar } from "./components/NavBar";
import { UserContext } from "./context";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NoMatchRoute } from "./pages/NoMatchRoute";
import { Pick } from "./pages/pick/Pick";
import { Leaderboard } from "./pages/leaderboard/Leaderboard";
import { Account } from "./pages/account/Account";
import { Leagues } from "./pages/leagues/Leagues";
import { LoadingRoute } from "./pages/LoadingRoute";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  const [user, setUser] = useState<any>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  return (
    <Router>
      <div className="App">
        <div>
          <NavBar></NavBar>
        </div>
        <div className="content">
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route
                path="/"
                element={
                  <LoginPage
                    loginLoading={loginLoading}
                    loginLoadingChanger={setLoginLoading}
                  />
                }
              />
              {isAuthenticated && (
                <Route path="/leaderboard" element={<Leaderboard />} />
              )}
              {isAuthenticated && (
                <Route path="/leagues" element={<Leagues />} />
              )}
              {isAuthenticated && <Route path="/picks" element={<Pick />} />}
              {isAuthenticated && (
                <Route path="/account" element={<Account />} />
              )}
              {!isLoading && isAuthenticated && (
                <Route path="*" element={<LoadingRoute />} />
              )}
            </Routes>
          </UserContext.Provider>
        </div>
        <div></div>
      </div>
    </Router>
  );
}

export default App;
