import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1></h1>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
export default routes;
