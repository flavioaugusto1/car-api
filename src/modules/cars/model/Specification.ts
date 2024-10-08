import { v4 as uuidV4 } from 'uuid'

export class Specification {
    id?: string
    name: string
    description: string
    created_ate: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}
