import express, { Application } from "express";
import { Routes } from "./routes"

export class Init {

    #app: Application;
    routes_: Routes;

    constructor() {
        this.#app = express();
        this.routes_ = new Routes();
        this.middleware();
        this.routes()
        this.server();
    }

    middleware() {
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.#app.use("/productos",this.routes_.index())
    }

    server() {
        this.#app.listen(3000, () => {
            console.log("Server running in port 3000")
        })
    }

}
