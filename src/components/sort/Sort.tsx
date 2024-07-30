import { useEffect, useRef, useState } from "react";
import * as styles from "./Sort.module.scss";
import Arrow from "@/assets/images/svg/arrow-top.svg";
import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { setSortValue } from "@/redux/features/filter/filterSlice";

const Sort = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sortingListValues = [{
        name: "популярности (по возрастанию)",
        sortValue: "rating"
      },
      {
        name: "популярности (по убыванию)",
        sortValue: "-rating"
      },
      {
        name: "цене (по возрастанию)",
        sortValue: "calculatedPrice"
      },
      {
        name: "цене (по убыванию)",
        sortValue: "-calculatedPrice"
      },
      {
        name: "алфавиту (по возрастанию)",
        sortValue: "title"
      },
      {
        name: "алфавиту (по убыванию)",
        sortValue: "-title"
      }
    ];

    const dispatch = useAppDispatch();
    const sort = useSelector((state: RootState) => state.filter.sort);
    const sortRef = useRef();

    useEffect(() => {
      const popUpHandler = (event: Event) => {
        if(!event.composedPath().includes(sortRef.current)) {
          setIsOpen(false);
        }
      }

      document.body.addEventListener("click", popUpHandler)

      return () => {
        document.body.removeEventListener("click", popUpHandler);
      }
    }, [])

    return (
        <div className={styles.sort} ref={sortRef}>
            <div className={styles.sort__label}>
                <Arrow className={styles.arrow} />
                <b>Сортировка по:</b>
                <span onClick={() => setIsOpen((prev) => !prev)}>{sort.name}</span>
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