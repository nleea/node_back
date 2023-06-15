import { autor_Lbermudez } from "../models/Autor_Lbermudez";
import { UserModels } from "../models/User";

export class CancionService {

    models: typeof autor_Lbermudez;

    constructor() {
        this.models = autor_Lbermudez;
    }

    async create(body: UserModels) {

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

    async update(id: string, body: UserModels) {
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