import { useState } from "react";
import * as styles from "./Sort.module.scss";
import Arrow from "../../../public/img/arrow-top.svg";

const Sort = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectValue, setSelectValue] = useState(0);
    const sortingListValues = ["популярности", "цене", "алфавиту"];

    const onClickSortHandler = (index: number) => {
        setSelectValue(index);
        setIsOpen(false);
    }

    return (
        <div className={styles.sort}>
            <div className={styles.sort__label}>
                <Arrow className={styles.arrow} />
                <b>Сортировка по:</b>
                <span onClick={() => setIsOpen((prev) => !prev)}>{sortingListValues[selectValue]}</span>
            </div>
            {isOpen && <div className={styles.sort__popup}>
                            <ul>
                                {sortingListValues.map((item, index) => {
                                    return <li key={item} onClick={() => onClickSortHandler(index)} className={selectValue === index ? styles.active : ""} >{item}</li>
                                })}
                            </ul>
                        </div>}
        </div>
    )
}

export default Sort