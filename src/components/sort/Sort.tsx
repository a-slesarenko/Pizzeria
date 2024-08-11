import * as styles from "./Sort.module.scss";
import Arrow from "@/assets/images/svg/arrow-top.svg";
import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { setSortValue } from "@/redux/features/filter/filterSlice";
import { sortingListValues } from "@/helpers/ThisProjectLocalData";
import { useState } from "react";

const Sort = () => {
  const dispatch = useAppDispatch();
  const sort = useSelector((state: RootState) => state.filter.sort);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.sort}>
        <div
          className={styles.sort__label}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Arrow className={styles.arrow} />
          <b>Сортировка по:</b>
          <span>{sort.name}</span>
        </div>
        {isOpen && (
          <div className={styles.sort__popup}>
            <ul>
              {sortingListValues.map((item) => {
                return (
                  <li
                    key={item.name}
                    onClick={() => dispatch(setSortValue(item))}
                    className={sort.name === item.name ? styles.active : ""}
                  >
                    {" "}
                    {item.name}{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen((prev) => !prev)}
        ></div>
      )}
    </>
  );
};

export default Sort;
