import * as styles from "./Cart.module.scss";
import CartIcon from "@/assets/images/svg/bag.svg";
import Trash from "@/assets/images/svg/trash.svg";
import Remove from "@/assets/images/svg/remove.svg";
import Back from "@/assets/images/svg/arrow-left-circle.svg";
import SmallPlus from "@/assets/images/svg/plus.svg";
import SmallMinus from "@/assets/images/svg/minus.svg";
import Button from "@/components/button/Button";
import { NavLink } from "react-router-dom";
import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  addPizza,
  clearPizza,
  decrementPizza,
  removePizza,
} from "@/redux/features/cart/cartSlice";
import CartEmpty from "../empty/CartEmpty";
import ConfirmModal from "@/components/confirmModal/ConfirmModal";
import { useState } from "react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  const clearCart = (desicion: string) => {
    if (desicion === "yes") {
      dispatch(clearPizza());
    } else if (desicion === "no") {
      setIsOpen(false);
    }
  };
  
  return cart.cartPizzas.length === 0 ? (
    <CartEmpty />
  ) : (
    <main>
      <div className={`container ${styles.cart__container}`}>
        <div className={styles.cart__top}>
          <h2>
            <CartIcon className={styles.cart} width={30} height={30} />
            Корзина
          </h2>
          <Button onClick={() => setIsOpen(true)}>
            <Trash className={styles.trash} />
            <span>Очистить корзину</span>
          </Button>
          {isOpen && <ConfirmModal onClickHandler={clearCart} />}
        </div>
        <ul className={styles.items}>
          {cart.cartPizzas.map((pizza) => {
            return (
              <li key={pizza.calculatedPrice + pizza.title} className={styles.item}>
                <div className={styles.img}>
                  <img src={pizza.imageUrl} alt="Pizza-Picture" />
                </div>
                <div className={styles.info}>
                  <h3>{pizza.title}</h3>
                  <p>
                    {pizza.type}, {pizza.size}см
                  </p>
                </div>
                <div className={styles.counter}>
                  <button
                    className={styles.counter__button}
                    onClick={() => dispatch(decrementPizza(pizza))}
                  >
                    <SmallMinus className={styles.minus} />
                  </button>
                  <span>{pizza.count}</span>
                  <button
                    className={styles.counter__button}
                    onClick={() => dispatch(addPizza(pizza))}
                  >
                    <SmallPlus className={styles.plus} />
                  </button>
                </div>
                <div className={styles.price}>
                  {pizza.calculatedPrice * pizza.count} ₽
                </div>
                <button
                  className={styles.remove__button}
                  onClick={() => dispatch(removePizza(pizza))}
                >
                  <Remove className={styles.remove} />
                </button>
              </li>
            );
          })}
        </ul>
        <div className={styles.cart__bottom}>
          <div className={styles.details}>
            <span>
              Всего пицц: <b>{cart.totalPizzas}</b>
            </span>
            <span>
              Сумма заказа: <b>{cart.totalPrice} ₽</b>
            </span>
          </div>
          <div className={styles.buttons}>
            <NavLink to={"/"}>
              <Button>
                <Back />
                <span>Вернуться назад</span>
              </Button>
            </NavLink>
            <Button>
              <span>Оплатить</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
