import { useEffect, useState } from "react";
import Categories from "../../categories/Categories";
import PizzaBlock from "../../pizzaBlock/PizzaBlock";
import Sort from "../../sort/Sort";
import * as styles from "./Content.module.scss";
import { Skeleton } from "../../pizzaBlock/Skeleton";

const Content = () => {
  const [Pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://669a09469ba098ed61fe129b.mockapi.io/pizzas')
    .then((resp) => resp.json())
    .then((res) => {
      setPizzas(res)
      setIsLoading(false);
    })

  }, [])

  return (
    <main>
      <div className="container">
        <div className={styles.content__top}>
          <Categories />
          <Sort />
        </div>
        <h2 className={styles.content__title}>Все пиццы</h2>
        <ul className={styles.content__items}>
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : Pizzas.map((item) => {
                return <PizzaBlock {...item} key={item.id} />
              })
            }
        </ul>
      </div>
    </main>
  );
};

export default Content
