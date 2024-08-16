import { Category } from '../../model/Category'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

export class ListCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
        return this.categoriesRepository.list()
    }
}
