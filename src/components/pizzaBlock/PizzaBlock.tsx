import { Pizzas } from "@/types/pizzasTypes";
import * as styles from "./PizzaBlock.module.scss";
import { useState } from "react";
import Plus from "../../../public/img/plus.svg";

interface Props extends Pizzas {}

const PizzaBlock = ({id, imageUrl, title, types, sizes, price, category, rating}: Props) => {
    const thickness = ["тонкое", "традиционное"];
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    return (
        <li className={styles.block__container}>
            <div className={styles.pizza__block}>
                <img
                    className={styles.image}
                    src={imageUrl}
                    alt={title}
                />
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.selector}>
                    <ul>
                        {types.map((type) => {
                            return <li className={activeType === type || types.length === 1 ? styles.active : ""} onClick={() => setActiveType(type)} >{thickness[type]}</li>
                        })}
                    </ul>
                    <ul>
                        {sizes.map((size, index) => {
                            return <li className={activeSize === index || sizes.length === 1 ? styles.active : ""} onClick={() => setActiveSize(index)}>{size} см</li>
                        })}
                    </ul>
                </div>
                <div className={styles.block__bottom}>
                    <div className={styles.price}>от {price} ₽</div>
                    <button className={styles.button}>
                        <Plus className={styles.plus}/>
                        <span>Добавить</span>
                        <i>2</i>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default PizzaBlock;