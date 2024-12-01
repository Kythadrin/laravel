import {RouteObject} from "react-router-dom";
import {Login} from "@/Pages/Login.tsx";
import {Registration} from "@/Pages/Registration.tsx";
import {PasswordRecovery} from "@/Pages/PasswordRecovery.tsx";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/registration",
        element: <Registration />,
    },
    {
        path: "/password-recovery",
        element: <PasswordRecovery />,
    },
    {
        path: "/password-renew",
        element: <PasswordRecovery />,
    },
    {
        path: "/dashboard",
        element: <PasswordRecovery />,
    },
];
