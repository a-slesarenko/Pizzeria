import * as styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <ul className={styles.list}>
                    <li className={styles.left}>
                        <h2>Карьера:</h2>
                        <a href="mailto:slesarenko.1994@inbox.ru">
                            AP_career@gmail.com
                        </a>
                        <p>
                            ОАО «Легендарные Технологии»
                            Юридический адрес: 194331, г. Москва, пер. Гагаринский, д. 3
                        </p>
                    </li>
                    <li className={styles.center}>
                        <span>Pizzeria Andrey's Pizza</span>
                        <p>Быстрая доставка!</p>
                        <p>© 2024 All rights reserved</p>
                    </li>
                    <li className={styles.right}>
                    <p>Почта для связи:</p>
                        <a href="mailto:slesarenko.1994@inbox.ru">
                            AndreysPizza@gmail.com
                        </a>
                        <p>Телефон:</p>
                        <a href="tel:+79044327169">8-800-222-04-05</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer