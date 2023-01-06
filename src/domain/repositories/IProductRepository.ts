import { Product } from "../entities/Product";

export interface IProductRepository {
    findById(uuid: string): Promise<Product>;
    save(product: Product): void;
    // list(): Promise<Product[]>;
    // teste(): void;
}
