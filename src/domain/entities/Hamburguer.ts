import { Product } from "./Product";

export class Hamburger extends Product {
    public ingredients: string;
    public sauce: string;

    constructor(
        name: string,
        price: number,
        ingredients: string,
        sauce: string,
        id?: string
    ) {
        super(name, price, id);
        this.ingredients = ingredients;
        this.sauce = sauce;
    }
}
