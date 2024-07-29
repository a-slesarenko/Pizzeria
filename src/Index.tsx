import ReactDOM from "react-dom/client";
import App from "@/components/App";
import {createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "@/redux/store";
import "./index.scss";
import "./css_utilities/globalVariables.css";
import Content from "./pages/home/Content";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/notfound/NotFound";

const router = createHashRouter(
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

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
