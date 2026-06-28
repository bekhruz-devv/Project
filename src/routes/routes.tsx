import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import StudentDashboard from "../pages/StudentDashboard";
import Teachers from "../pages/Teachers";
import Home from "../pages/Home";
import ProtectedRoute from "./protected.route";
import AuthLayout from "../components/layouts/AuthLayout";
import Faq from "../pages/Faq";
import Courses from "../pages/Courses";
import Pricing from "../pages/Pricing";
import CourseDetail from "../pages/CourseDetail";
import TeacherDetail from "../pages/TeacherDetail";

const routes = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/teachers",
            element: <Teachers />,
          },
          {
            path: "/teachers/akmal-karimov",
            element: <TeacherDetail />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/faq",
            element: <Faq />,
          },
          {
            path: "/courses",
            element: <Courses />,
          },
          {
            path: "/pricing",
            element: <Pricing />,
          },
          {
            path: "/courses/course-1",
            element: <CourseDetail />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <StudentDashboard />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectedRoute>
        <Register />,
      </ProtectedRoute>
    ),
  },
]);
export default routes;
