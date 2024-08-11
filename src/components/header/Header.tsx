import * as styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Cart from "@/assets/images/svg/bag.svg";
import Button from "../button/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useRef } from "react";
import logo from "@/assets/images/logo.png";
import Moon from "@/assets/images/svg/moon.svg";
import Sun from "@/assets/images/svg/sun.svg";

interface HeaderProps {
  mode: string;
  setMode: React.Dispatch<string>,
}

const Header = ({mode, setMode}: HeaderProps) => {
  const cart = useSelector((state: RootState) => state.cart);
  const isFirstRender = useRef(false);

  useEffect(() => {
    if (isFirstRender.current && cart.totalPizzas !== 0) {
      const pizzasToStore = JSON.stringify(cart);
      localStorage.setItem('cart', pizzasToStore);
    }
    isFirstRender.current = true;
  }, [cart]);

  const modeClickHandler = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <header>
      <div className="container">
        <div className={styles.flex_container}>
            <div className={styles.logo}>
              <NavLink to={"/"}>
                <img src={logo} alt="Pizza logo" />
              </NavLink>
              <div className={styles.logo_text}>
                <h1>Andrey's Pizza</h1>
                <p>самая вкусная пицца написанная на React'е</p>
              </div>
            </div>
            <div className={styles.mode_wrapper}>
              <span>{mode === "dark" ? "light" : "dark"} mode</span>
              <button className={styles.mode_switcher} onClick={modeClickHandler}>
                {mode === "dark" ? <Sun className={styles.sun}/> : <Moon className={styles.moon}/>}
              </button>
            </div>
          <NavLink to={"cart"}>
            <Button>
                <span>{cart.totalPrice}</span>
                <div className={styles.button_split}></div>
                <Cart className={styles.cart}/>
                <span>{cart.totalPizzas}</span>
            </Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header