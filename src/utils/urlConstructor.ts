import { FetchPizzasArgs } from "@/redux/features/pizzas/pizzasSlice";

let getFetchParams = ({category, sort, searchValue}: FetchPizzasArgs) => {
// Проверка для ситуаций если выбираем пиццы по категориям (0 это все пиццы, по умолчанию всегда передается 0) и хотим отсортировать по убыванию (префикс "-")
  if (sort.sortValue.includes("-") && category !== 0) {
    return {
      category,
      sortBy: sort.sortValue.replace("-", ""),
      order: "desc",
      title: searchValue
    };
    // Проверка для ситуаций если выбираем все пиццы (0 это все пиццы, по умолчанию всегда передается 0) и хотим отсортировать по убыванию (префикс "-")
  } else if(sort.sortValue.includes("-")) {
    return {
      sortBy: sort.sortValue.replace("-", ""),
      order: "desc",
      title: searchValue
    };
    // Проверка для ситуаций если выбираем пиццы по категориям и хотим отсортировать по возрастанию
  } else if(sort.sortValue && category !== 0) {
    return {
      category,
      sortBy: sort.sortValue, 
      title: searchValue
    }
    // Проверка для ситуаций если выбираем все пиццы  и хотим отсортировать по возрастанию
  } else if(sort.sortValue) {
    return {
      sortBy: sort.sortValue, 
      title: searchValue
    }
  }
};

export default getFetchParams