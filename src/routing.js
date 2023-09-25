import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";


export const routers = createBrowserRouter([
    {path: '/', element: <SiteLayout />, children: [
        {path: '', element: <Home />},
        {path: 'store', element: <Store />},
        {path: 'about', element: <About />},
        {path: 'contact', element: <Contact />}
    ]}
  ])