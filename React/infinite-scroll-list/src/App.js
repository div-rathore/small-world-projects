import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ListOne from "./components/ListOne";
import ListTwo from "./components/ListTwo";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/list1",
        element: <ListOne />,
      },
      {
        path: "/list2",
        element: <ListTwo />,
      },
    ],
  },
]);

export default App;
