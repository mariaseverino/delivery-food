import { Hamburger } from "../../../domain/entities/Hamburguer";
import { IProductRepository } from "../../../domain/repositories/IProductRepository";
import { CreateHamburgerDTO } from "./CreateHamburgerDTO";

export class CreateHamburgerUseCase {
    constructor(private productRepository: IProductRepository) {}

    async create(params: CreateHamburgerDTO) {
        const productAlreadyExists = await this.productRepository.findById(
            params.name
        );

        if (productAlreadyExists) {
            throw new Error("Product Already exists in system");
        }

        const newProduct = new Hamburger(
            params.name,
            params.price,
            params.ingredients,
            params.sauce
        );

        this.productRepository.save(newProduct);
    }
}
