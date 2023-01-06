// import { Product } from "../src/domain/entities/Product";

// export const products: Product[] = [];

// class ProductService implements IProductsRepository {
//     // public products: Product[] = [];

//     async create(product: Product): Promise<void> {
//         // const products: Product[] = [];
//         products.push(product);
//         //console.log(products);
//     }

//     async perform(): Promise<Product[]> {
//         //console.log(products);
//         return products;
//     }
// }
// class ProductController {
//     handle(request: any): any {
//         const product = new Product(request.name, request.price);

//         const productService = new ProductService();
//         productService.create(product);

//         return { status: 200 };
//     }

//     list(): any {
//         const productService = new ProductService();
//         const products = productService.perform();

//         //console.log(products);
//         return { status: 200 };
//     }
// }

// describe("Product Controller", () => {
//     it("Should return status 200 if a products was cadastrado", async () => {
//         const sut = new ProductController();

//         const body = {
//             name: "hambuguer",
//             description: "pao, queijo e hambuhuer",
//             price: 25.5,
//         };

//         const result = sut.handle(body);

//         expect(result.status).toBe(200);
//     });
//     it("Should return status 200 if return the products", async () => {
//         const sut = new ProductController();

//         const result = sut.list();

//         expect(result.status).toBe(200);
//     });
// });
