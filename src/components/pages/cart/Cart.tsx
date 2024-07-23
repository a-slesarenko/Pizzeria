import * as styles from "./Cart.module.scss";
import CartIcon from "../../../../public/img/bag.svg";
import Trash from "../../../../public/img/trash.svg";
import Remove from "../../../../public/img/remove.svg";
import Back from "../../../../public/img/arrow-left-circle.svg";
import SmallPlus from "../../../../public/img/plus.svg";
import SmallMinus from "../../../../public/img/minus.svg";
import Button from "@/components/button/Button";
import { NavLink } from "react-router-dom";

const Cart = () => {
    return (
        <main>
            <div className={`container ${styles.cart__container}`}>
                <div className={styles.cart__top}>
                    <h2>
                    <CartIcon className={styles.cart} width={30} height={30} />
                        Корзина
                    </h2>
                    <Button>
                        <Trash className={styles.trash} />
                        <span>Очистить корзину</span>
                    </Button>
                </div>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <div className={styles.img}>
                            <img src="https://i.ibb.co/74pPKPh/Pepronni.jpg" alt="Peperoni" />
                        </div>
                        <div className={styles.info}>
                            <h3>Пепперони</h3>
                            <p>Традиционная, 26см</p>
                        </div>
                        <div className={styles.counter}>
                            <button className={styles.counter__button}>
                                <SmallMinus className={styles.minus} />
                            </button>
                            <span>2</span>
                            <button className={styles.counter__button}>
                                <SmallPlus className={styles.plus} />
                            </button>
                        </div>
                        <div className={styles.price}>520 ₽</div>
                        <button className={styles.remove__button}>
                            <Remove className={styles.remove} />
                        </button>
                    </li>
                </ul>
                <div className={styles.cart__bottom}>
                    <div className={styles.details}>
                        <span>Всего пицц: <b>3шт.</b></span>
                        <span>Сумма заказа: <b>900 ₽</b></span>
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
    )
}

export default Cart