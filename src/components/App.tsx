import { NavLink, Outlet } from "react-router-dom";
import * as styles from "./App.module.scss";
import Header from "@/components/header/Header";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
};

export default App;
