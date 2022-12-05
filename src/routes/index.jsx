import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedPage";
import { DashBoard } from "../pages/DashBoard";
import { LoginPage } from "../pages/Login";
import { NotFound } from "../pages/NotFound/style";
import { RegisterPage } from "../pages/Register";

export const RoutesComponent = ({
  navigate,
  userLogin,
  user,
  userLogout,
  userRegister,
}) => {
  return (
    <Routes>
      <Route
        index
        element={<LoginPage navigate={navigate} userLogin={userLogin} />}
      />
      <Route
        path="register"
        element={
          <RegisterPage navigate={navigate} userRegister={userRegister} />
        }
      />
      <Route path="user" element={<ProtectedRoute user={user} />}>
        <Route
          index
          element={<DashBoard user={user} userLogout={userLogout} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
