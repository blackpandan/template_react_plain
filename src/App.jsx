import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./constants/ROUTES.jsx";

const router = createBrowserRouter(ROUTES);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
