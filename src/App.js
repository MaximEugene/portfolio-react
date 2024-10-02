import Home from "./views/home";
import Expertise from "./views/expertise/index.js";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "expertise",
    element: <Expertise />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
