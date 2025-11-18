import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Chat from "../pages/Chat/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);
export default router;
