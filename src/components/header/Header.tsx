import * as styles from "./Header.module.scss";
import Cart from "@/assets/images/svg/cart-icon.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.flex__container}>
          <div className={styles.header__logo}>
            <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <div className={styles.header__cart}>
            <a href="#" className={styles.button__cart}>
              <span>520 ₽</span>
              <div className={styles.button__split}></div>
              <Cart width={16} height={16} />
              <span>3</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header
