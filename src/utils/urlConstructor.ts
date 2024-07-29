import { Sort } from "@/redux/features/filter/filterSlice";

interface getUrlProps {
  category?: number;
  sort?: Sort;
  searchValue?: string;
  id?: string | number;
}

const getUrl = ({ category, sort, searchValue, id }: getUrlProps) => {
  let url = new URL(`https://669a09469ba098ed61fe129b.mockapi.io/pizzas`);

  if (id) {
    return url = new URL(`https://669a09469ba098ed61fe129b.mockapi.io/pizzas/${id}`);
  }

  if (category !== 0 && category !== undefined) {
    url.searchParams.append("category", category.toString());
  }

  if (sort) {
      if (sort.sortValue.includes("-")) {
        url.searchParams.append("order", "desc");
      }
      url.searchParams.append("sortBy", sort.sortValue.replace("-", ""));
    }
    
  if(searchValue) {
    url.searchParams.append("search", searchValue);
  }

  return url;
};

export default getUrl;