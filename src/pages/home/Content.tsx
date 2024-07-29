import { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import PizzaBlock from "../../components/pizzaBlock/PizzaBlock";
import Sort from "../../components/sort/Sort";
import * as styles from "./Content.module.scss";
import { Skeleton } from "../../components/pizzaBlock/Skeleton";
import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { fetchPizzas } from "@/redux/features/pizzas/pizzasSlice";
import NotFound from "../notfound/NotFound";
import getUrl from "@/utils/urlConstructor";

const Content = () => {
  const {allPizzas, status} = useSelector((state: RootState) => state.pizzas);
  const sort = useSelector((state: RootState) => state.filter.sort);
  const category = useSelector((state: RootState) => state.filter.category);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const url = getUrl({category, sort});
    dispatch(fetchPizzas(url.href));

  }, [category, sort])

  return (
    <main>
      <div className="container">
        <div className={styles.content__top}>
          <Categories />
          <Sort />
        </div>
        <h2 className={styles.content__title}>Все пиццы</h2>
        <ul className={styles.content__items}>
            {status === "error" && <NotFound />}
            {status === "loading"
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : allPizzas.map((item) => {
                return <PizzaBlock {...item} key={item.id} />
              })
            }
        </ul>
      </div>
    </main>
  );
};

export default Content
