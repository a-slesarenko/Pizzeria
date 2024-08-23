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
import Button from "../button/Button";
import { useSwipeable } from "react-swipeable";
import Left from "@/assets/images/svg/arrow-left-short.svg";

interface ChosenPizzaType {
  id: string;
  type: number;
}

interface ChosenPizzaSize {
  id: string;
  size: number;
}

const PizzaBlock = ({
  id,
  imageUrl,
  title,
  types,
  sizes,
  basePrice,
  calculatedPrice,
  composition,
}: Pizza) => {
  const [activeType, setActiveType] = useState(() => {
    const storedType: ChosenPizzaType = JSON.parse(
      sessionStorage.getItem(`type:${id}`)
    );
    if (storedType?.id === id) {
      return storedType.type;
    }
    return 0;
  });

  const [activeSize, setActiveSize] = useState(() => {
    const storedSize: ChosenPizzaSize = JSON.parse(
      sessionStorage.getItem(`size:${id}`)
    );
    if (storedSize?.id === id) {
      return storedSize.size;
    }
    return 26;
  });

  const [currentPrice, setCurrentPrice] = useState(calculatedPrice);
  const [isOpen, setIsOpen] = useState(false);
  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(false),
    swipeDuration: 750,
    delta: 100,
  });

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
    setCurrentPrice((prev) => (prev = price));
  }, [activeType, activeSize]);

  useEffect(() => {
    if (currentPrice !== calculatedPrice) {
      axios.patch(`https://669a09469ba098ed61fe129b.mockapi.io/pizzas/${id}`, {
        calculatedPrice: currentPrice,
      });
    }
  }, [currentPrice]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lockScroll");
    } else {
      document.body.classList.remove("lockScroll");
    }
  }, [isOpen]);

  return (
    <>
      <li className={styles.block__container}>
        <div
          className={styles.pizza__block}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img className={styles.image} src={imageUrl} alt={title} />
          <div className={styles.middle}>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.composition}>
              <p>{composition}</p>
            </div>
          </div>
          <div className={styles.block__bottom}>
            <div className={styles.price}>за {currentPrice} ₽</div>
            <Button className="button_with_counter">
              <Plus className={styles.plus} />
              <span>Добавить</span>
              {currentPizza ? <i>{currentPizza}</i> : ""}
            </Button>
          </div>
        </div>
      </li>
      {isOpen && (
        <div
          {...handlers}
          className={styles.wrapper}
          onClick={(event) => {
            event.currentTarget === event.target && setIsOpen(false);
          }}
        >
          <div className={styles.window}>
            <button
              className={styles.close_button}
              onClick={() => setIsOpen(false)}
            >
              <Left className={styles.left} />
            </button>
            <div className={styles.flex_wrapper}>
              <div className={styles.left}>
                <img src={imageUrl} alt={title} />
              </div>
              <div className={styles.right}>
                <div className={styles.content_container}>
                  <h4 className={styles.title}>{title}</h4>
                  <div className={styles.composition}>
                    <p>{composition}</p>
                  </div>
                  <div className={styles.selector}>
                    <ul>
                      {types.map((type) => {
                        return (
                          <li
                            key={type}
                            className={activeType === type ? styles.active : ""}
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
                            className={activeSize === size ? styles.active : ""}
                            onClick={() => setSizeInSession(size)}
                          >
                            {size} см
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className={styles.addToTaste}>
                    <h3>Добавить по вкусу</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio adipisci hic molestias rerum quas voluptatem iste non necessitatibus aliquid doloribus itaque nostrum, nobis nesciunt expedita accusantium deserunt, amet eligendi deleniti. Maiores quam, corrupti rem ut voluptas assumenda dicta officia? Minus, molestiae natus reprehenderit rerum fuga ipsum, incidunt qui, suscipit pariatur aut quasi et. Laboriosam quas nostrum, rerum aperiam fuga perferendis aliquam, necessitatibus, quaerat dolore fugiat saepe. Officia veniam sunt voluptas vero ullam aspernatur ex tenetur obcaecati dolor dignissimos accusamus, velit quis mollitia molestiae cum qui explicabo quae voluptate incidunt error delectus porro neque laboriosam rerum. Incidunt quo quaerat, atque non aspernatur quam perferendis corporis temporibus, doloribus adipisci odio delectus cumque hic molestiae dolore odit qui quibusdam provident ad itaque? Possimus voluptatum repellat voluptatibus ea quos delectus quae dolore, fugit nesciunt rem vel, quas, odit ullam recusandae unde officia? Optio, rem voluptatum. Aliquid magnam ipsa ab quidem vitae at perferendis eveniet cumque sapiente, corrupti aspernatur possimus quisquam suscipit delectus obcaecati id eius a sequi explicabo. Amet nobis inventore exercitationem reprehenderit, vitae officia aliquid deserunt soluta ratione consectetur doloribus sit hic in assumenda accusamus ea tempore repellendus distinctio iste. Doloremque nam aspernatur ut, totam possimus quasi modi dolor eligendi fugiat?</p>
                  </div>
                </div>
                <div className={styles.btn_wrapper}>
                  <div className={styles.price}>
                    В корзину за {currentPrice} ₽
                  </div>
                  <Button
                    className="button_with_counter"
                    onClick={addPizzaOnClick}
                  >
                    <Plus className={styles.plus} />
                    <span>Добавить</span>
                    {currentPizza ? <i>{currentPizza}</i> : ""}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PizzaBlock;
