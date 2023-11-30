import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MasterLayout from "./pages/MasterLayout"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      children: [
        {path:'/', element: <Home />},
        {path:'/collections', element: <Categories />},
        {path:'/about', element: <About />},
        {path:'/contact', element: <Contact />},
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
