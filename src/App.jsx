import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./constants/ROUTES.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
