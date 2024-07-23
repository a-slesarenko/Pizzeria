import * as styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={styles.list}>
                    <p>Pizzeria Andrey's Pizza</p>
                    <p>© 2024 Al rights reserved</p>
                    <p>Быстрая доставка!</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer