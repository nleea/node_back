import { Router } from "express";
import { Product } from "../domain";

export class Routes {
    product: Product = new Product();

    index = () => {
        const route = Router();
        route.use("/mostrar", this.product.findAll)
        route.use("/crear", this.product.create)
        route.use("/editar/:id", this.product.updateData)
        route.use("/eliminar/:id", this.product.deleteData)
        return route
    }
}