import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import * as styles from "./Categories.module.scss";
import { setCategory } from "@/redux/features/filter/filterSlice";
import Button from "../button/Button";
import Filter from "@/assets/images/svg/filter.svg";
import { categories } from "@/helpers/ThisProjectLocalData";
import { useState } from "react";

const Categories = () => {
    const category = useSelector((state: RootState) => state.filter.category);
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.categories} >
                <Button onClick={() => setIsOpen((prev) => !prev)}>
                <Filter/>
                <span>Фильтры</span>
                </Button>
                {isOpen && <div className={styles.filter_popup}> 
                    <ul>
                        {categories.map((item, index) => {
                            return  <li key={item} onClick={() => dispatch(setCategory(index))} className={category === index ? styles.active : ""} >{item}</li>
                        })}
                    </ul>
                </div>}
            </div>
            {isOpen && <div className="overlay" onClick={() => setIsOpen((prev) => !prev)}></div>}
        </>
    )
}

export default Categories