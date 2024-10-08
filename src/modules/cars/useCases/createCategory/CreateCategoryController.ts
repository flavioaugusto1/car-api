import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
    constructor(private createCategoryUsecase: CreateCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body

        this.createCategoryUsecase.execute({ name, description })

        return response.status(200).send()
    }
}
