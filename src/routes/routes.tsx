import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Teachers from "../pages/Teachers";
import Contact from "../pages/Contact";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teachers",
    element: <Teachers />,
  },
  {
    path: "/contact",
    element: <Contact />,
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
