import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {routes} from "@/utils/routes.tsx";

export const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </Router>
    );
}
