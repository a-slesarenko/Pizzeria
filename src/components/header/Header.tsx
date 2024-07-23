import * as styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Cart from "../../../public/img/bag.svg";
import Button from "../button/Button";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.flex__container}>
          <NavLink to={"/"}>
            <div className={styles.header__logo}>
              <img src="./img/1.png" alt="Pizza logo" />
              <div className={styles.logoText}>
                <h1>Andrey's Pizza</h1>
                <p>самая вкусная пицца написанная на React'е</p>
              </div>
            </div>
          </NavLink>
          <NavLink to={"cart"}>
            <Button>
                <span>52 000 ₽</span>
                <div className={styles.button__split}></div>
                <Cart className={styles.cart}/>
                <span>3</span>
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header
