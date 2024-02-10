import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter, Outlet} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <Outlet/>
    </BrowserRouter>
);
