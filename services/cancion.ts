import { cancion_Lbermudez } from "../models/Cancion_Lbermudez";
import { Cancion } from "../models/tipos";

export class CancionService {

    models: typeof cancion_Lbermudez;

    constructor() {
        this.models = cancion_Lbermudez;
    }

    async create(body: Cancion) {

        try {
            await this.models.create({ ...body });
            return { "message": "Ok" }
        } catch (error) {
            console.log(error)
            return { "message": error }
        }
    }

    async findAll() {
        try {
            const resulst = await this.models.findAll()
            return { "data": resulst }
        } catch (error) {
            return { "message": error }
        }
    }

    async update(id: string, body: Cancion) {
        try {
            await this.models.update({ ...body }, { where: { id: Number(id) } })
            return { "data": "Ok" }
        } catch (error) {
            return { "message": error }
        }
    }

    async delete(id: string) {
        try {
            await this.models.destroy({ where: { id: Number(id) } })
            return { "data": "Ok" }
        } catch (error) {
            return { "message": error }
        }
    }
}