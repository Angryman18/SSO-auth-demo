import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Callback from "./Callback";
import Home from "./Home";
import Signout from "./Signout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/callback",
      element: <Callback />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signout",
      element: <Signout />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
