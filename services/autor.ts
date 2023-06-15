import { autor_Lbermudez } from "../models/Autor_Lbermudez";
import { Autor } from "../models/tipos";

export class AutorService {

    models: typeof autor_Lbermudez;

    constructor() {
        this.models = autor_Lbermudez;
    }

    async create(body: Autor) {

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

    async update(id: string, body: Autor) {
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