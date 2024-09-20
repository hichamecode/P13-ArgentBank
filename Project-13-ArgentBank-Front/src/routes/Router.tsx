

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

// 2e requete pour récupérer firstName et lastName de user au moment ou j'ai besoin de l'info (dans le header par exemple)
// le state doit pouvoir se recharger depuis le localStorage pour ne pas refaire de requete à chaque fois ! 
// au moment de savoir si l'user est authentifié (ProtectedRoute), je dois vérifier si le token est présent dans le localStorage >>> localStorage.removeItem('authToken') pour le supprimer


