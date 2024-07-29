import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import * as styles from "./Categories.module.scss";
import { setCategory } from "@/redux/features/filter/filterSlice";

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Разное"];

const Categories = () => {
    const category = useSelector((state: RootState) => state.filter.category);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((item, index) => {
                    // Стоит выносети это |className={category === item ? styles.active : ""}| в clsx или classnames?
                    return  <li key={item} onClick={() => dispatch(setCategory(index))} className={category === index ? styles.active : ""} >{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories