import { User } from "../models";
import { UserModels } from "../models/User";

export class ProductService {
    async create(body: UserModels) {
        console.log(body)
        try {
            await User.create({ ...body });
            return { "message": "Ok" }
        } catch (error) {
            console.log(error)
            return { "message": error }
        }
    }

    async findAll() {
        try {
            const resulst = await User.findAll()
            return { "data": resulst }
        } catch (error) {
            return { "message": error }
        }
    }

    async update(id: string, body: UserModels) {
        try {
            await User.update({ ...body }, { where: { id: Number(id) } })
            return { "data": "Ok" }
        } catch (error) {
            return { "message": error }
        }
    }

    async delete(id: string) {
        try {
            await User.destroy({ where: { id: Number(id) } })
            return { "data": "Ok" }
        } catch (error) {
            return { "message": error }
        }
    }
}