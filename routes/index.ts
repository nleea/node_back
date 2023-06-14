import { Router } from "express";
import { Product } from "../domain";

export class Routes {
    product: Product = new Product();

    index = () => {
        const route = Router();
        route.use("/mostrar", this.product.findAll)
        return route
    }
}