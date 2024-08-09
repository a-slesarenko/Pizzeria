import { CartPizza, Pizza } from "@/types";
import * as styles from "./PizzaBlock.module.scss";
import { useEffect, useState } from "react";
import Plus from "@/assets/images/svg/plus.svg";
import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { addPizza } from "@/redux/features/cart/cartSlice";
import axios from "axios";
import { thickness } from "@/helpers/ThisProjectLocalData";
import calcPrice from "@/utils/calcPrice";

interface ChosenPizzaType {
  id: string,
  type: number
}

interface ChosenPizzaSize {
  id: string,
  size: number,
}

const PizzaBlock = ({
  id,
  imageUrl,
  title,
  types,
  sizes,
  basePrice,
  calculatedPrice,
}: Pizza) => {

  const [activeType, setActiveType] = useState(() => {
    const storedType: ChosenPizzaType = JSON.parse(sessionStorage.getItem(`type:${id}`));
    if (storedType?.id === id) {
      return storedType.type;
    }
    return 0;
  });

  const [activeSize, setActiveSize] = useState(() => {
    const storedSize: ChosenPizzaSize = JSON.parse(sessionStorage.getItem(`size:${id}`));
    if (storedSize?.id === id) {
      return storedSize.size;
    }
    return 26;
  });

  const [currentPrice, setCurrentPrice] = useState(calculatedPrice);

  const setTypeInSession = (type: number) => {
    setActiveType(type);
    const itemWithChosenType: ChosenPizzaType = { type, id };
    sessionStorage.setItem(`type:${id}`, JSON.stringify(itemWithChosenType));
  };

  const setSizeInSession = (size: number) => {
    setActiveSize(size);
    const itemWithChosenSize: ChosenPizzaSize = { size, id };
    sessionStorage.setItem(`size:${id}`, JSON.stringify(itemWithChosenSize));
  };

  const dispatch = useAppDispatch();
  const currentPizza = useSelector((state: RootState) =>
    state.cart.cartPizzas
      .filter((pizza) => pizza.id === id)
      .reduce((acum, pizza) => (acum += pizza.count), 0)
  );

  const addPizzaOnClick = () => {
    const pizza: CartPizza = {
      id,
      imageUrl,
      title,
      calculatedPrice: currentPrice,
      type: thickness[activeType],
      size: activeSize,
    };
    dispatch(addPizza(pizza));
  };

  useEffect(() => {
    let price = calcPrice(activeType, activeSize, basePrice);
      setCurrentPrice((prev) => prev = price);
  }, [activeType, activeSize]);

  useEffect(() => {
    if (currentPrice !== calculatedPrice) {
      axios.patch(`https://669a09469ba098ed61fe129b.mockapi.io/pizzas/${id}`, { calculatedPrice: currentPrice })
    }
  }, [currentPrice]);

  return (
    <li className={styles.block__container}>
      <div className={styles.pizza__block}>
        <img className={styles.image} src={imageUrl} alt={title} />
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.selector}>
          <ul>
            {types.map((type) => {
              return (
                <li
                  key={type}
                  className={activeType === type ? styles.active : ''}
                  onClick={() => setTypeInSession(type)}
                >
                  {thickness[type]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((size) => {
              return (
                <li
                  key={size}
                  className={activeSize === size ? styles.active : ''}
                  onClick={() => setSizeInSession(size)}
                >
                  {size} см
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.block__bottom}>
          <div className={styles.price}>
            от {currentPrice} ₽
          </div>
          <button className={styles.button} onClick={addPizzaOnClick}>
            <Plus className={styles.plus} />
            <span>Добавить</span>
            {currentPizza ? <i>{currentPizza}</i> : ""}
          </button>
        </div>
      </div>
    </li>
  );
};

export default PizzaBlock;
