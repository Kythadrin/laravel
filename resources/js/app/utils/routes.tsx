import {RouteObject} from "react-router-dom";
import {Login} from "@/Pages/Login.tsx";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Login />,
    },
];
