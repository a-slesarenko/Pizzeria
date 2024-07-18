import { NavLink, Outlet } from "react-router-dom";
import * as styles from "./App.module.scss";
import Header from "@/components/header/Header";
import Content from "./main/Content";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
