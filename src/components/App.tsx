import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import * as styles from "./App.module.scss";
import Header from "@/components/header/Header";
import Content from "./pages/home/Content";
import Footer from "./footer/Footer";
import NotFound from "./pages/notfound/NotFound";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration/>
    </div>
  );
};

export default App;
