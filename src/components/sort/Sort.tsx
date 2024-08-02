import { useRef } from "react";
import * as styles from "./Sort.module.scss";
import Arrow from "@/assets/images/svg/arrow-top.svg";
import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { setSortValue } from "@/redux/features/filter/filterSlice";
import { usePopupCloser } from "@/hooks/usePopupCloser";
import { sortingListValues } from "@/helpers/ThisProjectLocalData";

const Sort = () => {
    const dispatch = useAppDispatch();
    const sort = useSelector((state: RootState) => state.filter.sort);
    const sortRef = useRef();
    const [isOpen, setIsOpen] = usePopupCloser(sortRef);

    return (
        <div className={styles.sort} ref={sortRef}>
            <div className={styles.sort__label} onClick={() => setIsOpen((prev) => !prev)}>
                <Arrow className={styles.arrow} />
                <b>Сортировка по:</b>
                <span>{sort.name}</span>
            </div>
            {isOpen && <div className={styles.sort__popup}>
                            <ul>
                                {sortingListValues.map((item) => {
                                    return <li key={item.name} onClick={() => dispatch(setSortValue(item))} className={sort.name === item.name ? styles.active : ""}> {item.name} </li>
                                })}
                            </ul>
                        </div>}
        </div>
    )
}

export default Sort