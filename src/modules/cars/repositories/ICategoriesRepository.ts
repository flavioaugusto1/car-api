import { Category } from '../model/Category'

export interface ICreateCategoryDTO {
    name: string
    description: string
}

export interface ICategoriesRepository {
    findByName(name: string): Category
    list(): Category[]
    create({ name, description }: ICreateCategoryDTO): void
}
