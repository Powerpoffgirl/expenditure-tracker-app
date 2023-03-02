import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../path";

const RestrictedRoutes = () => {
  return (
    <div>
      {window.localStorage.getItem("token") ? (
        <Navigate to={PATHS.MANAGE_EXPENSE} />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default RestrictedRoutes;
