import ReactDOM from "react-dom/client";
import App from "@/components/App";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./index.scss";
import "./css_utilities/globalVariables.css";
import Content from "./components/pages/home/Content";
import Cart from "./components/pages/cart/Cart";
import NotFound from "./components/pages/notfound/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route index element={<Content />} />
          <Route path="cart" element={<Cart />} />
          <Route path="not-found" element={<NotFound />} />
        </Route>
      )
)

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={router} />);
