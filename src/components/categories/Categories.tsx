import { useState } from "react";
import * as styles from "./Categories.module.scss";

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = () => {
    const [category, setCategory] = useState("Все");

    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((item) => {
                    // Стоит выносети это |className={category === item ? styles.active : ""}| в clsx или classnames?
                    return  <li key={item} onClick={(e) => setCategory(item)} className={category === item ? styles.active : ""} >{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories