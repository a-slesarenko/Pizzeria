import * as styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <ul className={styles.list}>
                    <li className={styles.career_block}>
                        <div  className={styles.career_link}>
                            <h2>Карьера:</h2>
                            <a href="mailto:slesarenko.1994@inbox.ru">
                                AP_career@gmail.com
                            </a>
                        </div>
                        <div className={styles.career_text}>
                            <p>
                                ОАО «Легендарные Технологии»
                                Юридический адрес: 194331, г. Москва, пер. Гагаринский, д. 3
                            </p>
                        </div>
                    </li>
                    <li className={styles.copyrights_block}>
                        <div className={styles.copyrights_delivery}>
                            <span>Pizzeria Andrey's Pizza</span>
                            <p>Быстрая доставка!</p>
                        </div>
                        <div className={styles.copyright}>
                            <p>© 2024 All rights reserved</p>
                        </div>
                    </li>
                    <li className={styles.contacts_block}>
                        <div className={styles.mail}>
                            <p>Почта для связи:</p>
                            <a href="mailto:slesarenko.1994@inbox.ru">
                                AndreysPizza@gmail.com
                            </a>
                        </div>
                        <div className={styles.phone}>
                            <p>Телефон:</p>
                            <a href="tel:+79044327169">8-800-222-04-05</a>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer