import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/Auth";

 function Logout(){
  const { LogoutUser } = useAuth();

  useEffect(() => {
    localStorage.clear();
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/login" />;
};
export default Logout;