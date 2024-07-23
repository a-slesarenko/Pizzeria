type Shape = number[];
type Sizes = number[];;

export interface Pizzas {
    id: number,
    imageUrl: string,
    title: string,
    types?: Shape,
    sizes?: Sizes,
    price: number,
    category?: number,
    rating?: number
}