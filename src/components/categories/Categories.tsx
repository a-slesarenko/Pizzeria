import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import * as styles from "./Categories.module.scss";
import { setCategory } from "@/redux/features/filter/filterSlice";
import Button from "../button/Button";
import { useRef } from "react";
import Filter from "@/assets/images/svg/filter.svg";
import { usePopupCloser } from "@/hooks/usePopupCloser";
import { categories } from "@/helpers/ThisProjectLocalData";

const Categories = () => {
    const category = useSelector((state: RootState) => state.filter.category);
    const dispatch = useAppDispatch();
    const filtersRef = useRef();
    const [isOpen, setIsOpen] = usePopupCloser(filtersRef);

    return (
        <div className={styles.categories} ref={filtersRef}>
            <Button onClick={() => setIsOpen((prev) => !prev)}>
              <Filter/>
              <span>Фильтры</span>
            </Button>
            {isOpen && <div className={styles.filter_popup}> 
                <ul>
                    {categories.map((item, index) => {
                        // Стоит выносети это |className={category === item ? styles.active : ""}| в clsx или classnames?
                        return  <li key={item} onClick={() => dispatch(setCategory(index))} className={category === index ? styles.active : ""} >{item}</li>
                    })}
                </ul>
            </div>}
        </div>
    )
}

export default Categories