import { Outlet, ScrollRestoration } from "react-router-dom";
import * as styles from "./App.module.scss";
import Header from "@/components/header/Header";
import Footer from "./footer/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import axios from "axios";
import getUrl from "@/utils/urlConstructor";

const App = () => {
  const returnPizzas = useSelector((state: RootState) => state.pizzas.returnToServer);

useEffect(() => {
  return () => {
    axios.put("https://669a09469ba098ed61fe129b.mockapi.io/pizzas", returnPizzas)
  }
}, []);

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
