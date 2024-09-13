import { Routes, Route } from "react-router-dom";


import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import { useSelector } from "react-redux";

const Router = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/login/profile' element={<Profile />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default Router;

