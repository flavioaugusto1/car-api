import { Request, Response } from 'express'
import { ListCategoryUseCase } from './ListCategoriesUseCase'

export class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        const categories = this.listCategoriesUseCase.execute()
        const total = categories.length

        return response.status(200).json({ categories, total })
    }
}
