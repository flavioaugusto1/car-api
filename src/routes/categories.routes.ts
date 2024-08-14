import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'
import { CreateCategoryService } from '../services/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body

    const createCategoryServices = new CreateCategoryService(
        categoriesRepository,
    )

    createCategoryServices.execute({ name, description })

    return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
    const categories = categoriesRepository.list()
    const total = categories.length

    return response.status(200).json({ categories, total })
})

export { categoriesRoutes }
