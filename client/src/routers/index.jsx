import { createBrowserRouter, redirect } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage/>,
        loader: () => {
            return !localStorage.getItem("token") ? redirect("/login") : null;
        }

    },
    {
        path: "/login",
        element: <LoginPage/>,
        loader: () => {
            return localStorage.getItem("token") ? redirect("/") : null;
        }

    }
])

export default router;