import { Router } from 'express'
import { CategoryRepository } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()
const categoriesRepository = new CategoryRepository()

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body

    const categoryAlreadyExists = categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
        return response.status(400).json({ error: 'Categoria já existente' })
    }

    categoriesRepository.create({ name, description })
    return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
    const categories = categoriesRepository.list()
    const total = categories.length

    return response.status(200).json({ categories, total })
})

export { categoriesRoutes }
