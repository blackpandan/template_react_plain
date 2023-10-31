import App from "../App.jsx";

const ROUTES = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
];
export default ROUTES;
