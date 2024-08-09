type Shape = number[];
type Sizes = number[];

export interface Pizza {
    id: string,
    imageUrl: string,
    title: string,
    types?: Shape,
    sizes?: Sizes,
    basePrice: number,
    category?: number,
    rating?: number,
    calculatedPrice: number,
}

export interface CartPizza {
    id: string,
    imageUrl: string,
    title: string,
    basePrice?: number,
    type: string,
    size: number,
    count?: number,
    calculatedPrice: number,
}