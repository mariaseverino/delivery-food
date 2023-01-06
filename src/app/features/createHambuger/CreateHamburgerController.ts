import { Request, Response } from "express";
import { CreateHamburgerUseCase } from "./CreateHamburgerUseCase";

export class CreateHamburgerController {
    constructor(private createHamburgerUseCase: CreateHamburgerUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, price, ingredients, sauce } = request.body;

        try {
            await this.createHamburgerUseCase.create({
                name,
                price,
                ingredients,
                sauce,
            });

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: "Unexpected error.",
            });
        }
    }
}
