import { createBrowserRouter } from "react-router";
import App from "../App";
import Contact from "../pages/Contact";
import Home from "../pages/Home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

export default router