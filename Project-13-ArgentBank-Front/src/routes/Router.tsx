

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={ <ProtectedRoute> <Profile /> </ProtectedRoute> } />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;



