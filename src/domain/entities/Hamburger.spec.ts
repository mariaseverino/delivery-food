import { Hamburger } from "./Hamburguer";

describe("Hamburger", () => {
    it("should create and return a instance of Hamburger ", () => {
        const sut = new Hamburger(
            "x-tudo",
            25.5,
            "pao, queijo, presunto",
            "maionese",
            "45"
        );

        console.log(sut);
        expect(sut).toBeInstanceOf(Hamburger);
    });
});
