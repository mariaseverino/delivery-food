import { Product } from "../entities/Product";

export interface ICreateProduct {
    save(product: Product): Promise<Product>;
}
