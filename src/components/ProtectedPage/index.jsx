import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const ProtectedRoute = () => {
  const { navigate, user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{user ? <Outlet /> : <span>Loading...</span>}</>;
};
