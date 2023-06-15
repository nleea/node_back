import { Router } from "express";
import { CancionControlador } from "../controladores/cancionController";

export class Routes {
    product: CancionControlador = new CancionControlador();

    index = () => {
        const routeCancion = Router();
        const routeAutor = Router();
        const route = Router({ mergeParams: true });
        routeCancion.get("/mostrar", this.product.findAll)
        routeCancion.post("/crear", this.product.create)
        routeCancion.use("/editar/:id", this.product.updateData)
        routeCancion.use("/eliminar/:id", this.product.deleteData)

        routeAutor.get("/mostrar", this.product.findAll)
        routeAutor.post("/crear", this.product.create)
        routeAutor.use("/editar/:id", this.product.updateData)
        routeAutor.use("/eliminar/:id", this.product.deleteData)

        route.use("/autor", routeAutor)
        route.use("/cancion", routeCancion)

        return route
    }
}