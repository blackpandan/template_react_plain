import Home from "../views/Home.jsx";
import Root from "../layouts/Root.jsx";

const ROUTES = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
export default ROUTES;
