import { Product } from "../domain/entities/Product";
import { IProductRepository } from "../domain/repositories/IProductRepository";

export class RepositoryMemory implements IProductRepository {
    teste(): void {
        console.log("teste");
    }
    findById(uuid: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    save(product: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    list(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
}
