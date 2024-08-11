import { Outlet, ScrollRestoration } from "react-router-dom";
import * as styles from "./App.module.scss";
import Header from "@/components/header/Header";
import Footer from "./footer/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import axios from "axios";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import clsx from "clsx";

const App = () => {
  const returnPizzas = useSelector(
    (state: RootState) => state.pizzas.returnToServer
  );
  const [mode, setMode] = useLocalStorage("siteTheme", "dark");

  useEffect(() => {
    return () => {
      axios.put(
        "https://669a09469ba098ed61fe129b.mockapi.io/pizzas",
        returnPizzas
      );
    };
  }, []);

  const wrapperCombinedClass = clsx(
    styles.wrapper,
    mode === "light" && "light"
  );

  return (
    <div className={wrapperCombinedClass}>
      <Header mode={mode} setMode={setMode} />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default App;
