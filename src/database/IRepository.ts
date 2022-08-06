import { UpdatedNote, UpdatedSite, UpdatedTableObject } from "./types"

export interface IRepository<T> {
    getById(id: number): T | Promise<T>
    insertAndGetId(object: T): number | Promise<number>
    update(id: number, updatedObject: UpdatedTableObject): void
    delete(id: number): void 
}