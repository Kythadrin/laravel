import {RouteObject} from "react-router-dom";
import {Login} from "@/Pages/Login.tsx";
import {Registration} from "@/Pages/Registration.tsx";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/registration",
        element: <Registration />,
    },
];
