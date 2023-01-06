import { uuid } from "uuidv4";

export class Product {
    public readonly id: string;

    public name: string;
    public price: number;

    constructor(name: string, price: number, id?: string) {
        this.name = name;
        this.price = price;

        if (!id) {
            this.id = uuid();
        } else {
            this.id = id;
        }
    }
}

export const products: Product[] = [];
