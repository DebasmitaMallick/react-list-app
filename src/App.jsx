import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Lists from "./components/Lists/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewListCreation from "./components/NewList/index.jsx";

function App() {
  const router = createHashRouter([  // ✅ Change from createBrowserRouter to createHashRouter
    {
      path: "/",
      element: <Lists />,
    },
    {
      path: "newlist",
      element: <NewListCreation />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;