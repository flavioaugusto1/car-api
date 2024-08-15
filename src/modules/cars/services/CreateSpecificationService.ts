import { SpecificationRepository } from '../repositories/SpecificationRepository'

interface IRequest {
    name: string
    description: string
}

export class CreateSpecificationService {
    constructor(private specificationRepository: SpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationRepository.findByName(name)

        if (specificationAlreadyExists) {
            throw new Error('Especificação já existente.')
        }

        this.specificationRepository.create({
            name,
            description,
        })
    }
}
