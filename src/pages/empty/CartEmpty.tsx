import { NavLink } from "react-router-dom";
import * as styles from "./CartEmpy.module.scss";
import Button from "@/components/button/Button";
import Back from "@/assets/images/svg/arrow-left-circle.svg";

const CartEmpty = () => {
    return (
        <main>
            <div className={`container ${styles.empty_container}`}>
                <div className={styles.flex_wrapper}>
                    <h2>Корзина пустая</h2>
                    <img src="https://i.ibb.co/yNtT6gm/photo-5271719361524128474-y.jpg" alt="Empty cart" />
                    <p>Для того, чтобы добавить пиццу в корзину, перейдите на главную страницу.</p>
                    <NavLink to={"/"} className={styles.back_btn}>
                        <Button>
                            <Back />
                            <span>Вернуться назад</span>
                        </Button>
                    </NavLink>
                </div>
            </div>
        </main>
    )
}

export default CartEmpty