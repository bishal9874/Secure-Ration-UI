import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/screens/Layout";
import Home from "./components/mainScreens/Home";

import Login from "./components/mainScreens/AuthScreens/Login";
import Reg from "./components/mainScreens/AuthScreens/Reg";

import FaceAuth from "./components/mainScreens/AuthScreens/FaceAuth";
import Dashboard from "./components/mainScreens/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const { access_token } = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="dashboard"
              element={
                access_token ? <Dashboard /> : <Navigate to={"/login"} />
              }
            />
          </Route>

          <Route
            path="/login"
            element={access_token ? <Navigate to={"/logincam"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={access_token ? <Navigate to={"/dashboard"} /> : <Reg />}
          />
          <Route
            path="/logincam"
            element={access_token ? <FaceAuth /> : <Navigate to={"/login"} />}
          />

          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
