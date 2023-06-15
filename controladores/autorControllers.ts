import { Request, Response } from "express";
import {  AutorService} from "../services/autor";
import { Autor } from "../models/tipos";

export class CancionControlador {

    services: AutorService = new AutorService();

    create = async (req: Request, res: Response) => {

        const body = req.body as Autor;

        const response = this.services.create(body)

        return res.status(200).json(response)
    }

    findAll = async (req: Request, res: Response) => {

        const resulst = await this.services.findAll()

        return res.status(200).json(resulst)
    }

    updateData = async (req: Request, res: Response) => {

        const body = req.body as Autor;
        const {id} = req.params;

        const response = this.services.update(id,body)

        return res.status(200).json(response)
    }

    deleteData = async (req: Request, res: Response) => {

        const {id} = req.params;

        const response = this.services.delete(id)

        return res.status(200).json(response)
    }

    
}