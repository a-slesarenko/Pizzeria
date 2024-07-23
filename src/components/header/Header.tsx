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
              <img width="150" src="./img/1.png" alt="Pizza logo" />
              <div className={styles.logoText}>
                <h1>Andrey's Pizza</h1>
                <p>самая вкусная пицца написанная на React'е</p>
              </div>
            </div>
          </NavLink>
          <NavLink to={"cart"}>
            <Button>
                <span>520 ₽</span>
                <div className={styles.button__split}></div>
                <Cart fill="white" width={16} height={16} />
                <span>3</span>
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header
