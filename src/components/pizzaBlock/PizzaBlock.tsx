import { CartPizza, Pizza } from "@/types/pizzasTypes";
import * as styles from "./PizzaBlock.module.scss";
import { useEffect, useState } from "react";
import Plus from "@/assets/images/svg/plus.svg";
import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { addPizza } from "@/redux/features/cart/cartSlice";
import axios from "axios";
import { thickness } from "@/helpers/ThisProjectLocalData";
import calcPrice from "@/utils/calcPrice";

interface Props extends Pizza {}

const PizzaBlock = ({
  id,
  imageUrl,
  title,
  types,
  sizes,
  basePrice,
  calculatedPrice,
}: Props) => {

  const [activeType, setActiveType] = useState(() => {
    const obj = JSON.parse(sessionStorage.getItem(`type:${id}`));
    if (obj?.id === id) {
      return obj.type;
    }
    return 0;
  });

  const [activeSize, setActiveSize] = useState(() => {
    const obj = JSON.parse(sessionStorage.getItem(`size:${id}`));
    if (obj?.id === id) {
      return obj.size;
    }
    return 26;
  });

  const [currentPrice, setCurrentPrice] = useState(calculatedPrice);

  const setTypeInSession = (type: number) => {
    setActiveType(type);
    sessionStorage.setItem(`type:${id}`, JSON.stringify({ type, id }));
  };

  const setSizeInSession = (size: number) => {
    setActiveSize(size);
    sessionStorage.setItem(`size:${id}`, JSON.stringify({ size, id }));
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
      setCurrentPrice(calcPrice(activeType, activeSize, basePrice));
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
                  className={activeType === type && styles.active}
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
                  className={activeSize === size && styles.active}
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
