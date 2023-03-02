import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PATHS } from "./path";
import Login from "./Components/Login/Login";
import AddExpense from "./Components/AddExpense/AddExpense";
import ManageExpense from "./Components/ManageExpense/ManageExpense";
import PrivateRoutes from "./routes/PrivateRoutes";
import RestrictedRoutes from "./routes/RestrictedRoutes";

export const centeredStyle = {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  backgroundColor: "dodgerblue",
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route path={PATHS.ADD_EXPENSE} element={<AddExpense />} />
        <Route path={PATHS.MANAGE_EXPENSE} element={<ManageExpense />} />
      </Route>

      <Route path="/" element={<RestrictedRoutes />}>
        <Route path={PATHS.LOGIN} element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
