import React ,{ useEffect, useState} from "react";
import { Navigate, Routes,Link, Route } from "react-router-dom";
import { Home, Header,Services, Login,Service, Footer } from "./components";
import "./App.css";

function App() {

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };
  return (
    <div className="App">
      {
                isAuthenticated ? (
                  <Header />
                ) : (
                  <Link to="/login" />
                )
                }
      <Routes>
        <Route
              exact
              path="/"
              element={
                isAuthenticated ? (
                  <Home  setAuth={setAuth} />
                ) : (
                  <Navigate replace to="/login" />
                )
                }
              
            />
        <Route exact path="/services" element={<Services />} />
        <Route
              exact
              path="/login"
              element={
                !isAuthenticated ? (
                  <Login setAuth={setAuth} />
                ) : (
                  <Navigate replace to="/" />
                )
                }
              
            />
        <Route exact path="/register" element={<Login />} />
        <Route exact path="/services/:s_id" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
