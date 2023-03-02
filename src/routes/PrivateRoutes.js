import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from "../path";

const PrivateRoutes = () => {
  return (
    <div>
      {window.localStorage.getItem("token") ? (
        <Outlet />
      ) : (
        <Navigate to={PATHS.LOGIN} />
      )}
    </div>
  );
};

export default PrivateRoutes;
