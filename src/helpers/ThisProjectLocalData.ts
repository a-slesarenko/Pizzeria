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

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Разное"];


const thickness = ["тонкое", "фирменное"];

export {sortingListValues, categories, thickness};