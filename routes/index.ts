import { Router } from "express";
import { CancionControlador } from "../controladores/cancionController";
import { AutorControlador } from "../controladores/autorControllers";


export class Routes {
    cancion: CancionControlador = new CancionControlador();
    autor: AutorControlador = new AutorControlador();


    index = () => {
        const routeCancion = Router();
        const routeAutor = Router();
        const route = Router({ mergeParams: true });
        routeCancion.get("/mostrar", this.cancion.findAll)
        routeCancion.post("/crear", this.cancion.create)
        routeCancion.use("/editar/:id", this.cancion.updateData)
        routeCancion.use("/eliminar/:id", this.cancion.deleteData)

        routeAutor.get("/mostrar", this.autor.findAll)
        routeAutor.post("/crear", this.autor.create)
        routeAutor.use("/editar/:id", this.autor.updateData)
        routeAutor.use("/eliminar/:id", this.autor.deleteData)

        route.use("/autor", routeAutor)
        route.use("/cancion", routeCancion)

        return route
    }
}