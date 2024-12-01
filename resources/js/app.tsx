import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "@/App.tsx";

import "../css/app.css";

const rootElement: HTMLElement|null = document.getElementById('root');

if (rootElement === null) {
    throw Error("Element with id root not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
