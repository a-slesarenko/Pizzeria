import * as styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Cart from "@/assets/images/svg/bag.svg";
import Button from "../button/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Header = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <header>
      <div className="container">
        <div className={styles.flex_container}>
          <NavLink to={"/"}>
            <div className={styles.logo}>
              <img src="./img/1.png" alt="Pizza logo" />
              <div className={styles.logo_text}>
                <h1>Andrey's Pizza</h1>
                <p>самая вкусная пицца написанная на React'е</p>
              </div>
            </div>
          </NavLink>
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