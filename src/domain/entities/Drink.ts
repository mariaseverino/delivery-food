import { Product } from "./Product";

export class Drink extends Product {
    public size: string;

    constructor(name: string, price: number, size: string, id?: string) {
        super(name, price, id);
        this.size = size;
    }
}
