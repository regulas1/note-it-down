import Dexie from "dexie";
import { IRepository } from "../IRepository";
import { TableTypes, UpdatedTableObject } from "../types";

export class DexieRepository<T extends TableTypes> implements IRepository<T> {
    protected readonly table: Dexie.Table<T, number>;

    protected constructor(table: Dexie.Table<T, number>) {
        this.table = table;
    }

    async getById(id: number): Promise<T> {
        const object = await this.table.where("id").equals(id).first();

        if (object === undefined) {
            throw new IdNotFoundError();
        }

        return object;
    }

    async insertAndGetId(object: T): Promise<number> {
        return await this.table.add(object)
    }

    async update(id: number, updatedObject: UpdatedTableObject): Promise<void> {
        await this.table.update(id, updatedObject);
    }

    async delete(id: number): Promise<void> {
        await this.table.where("id").equals(id).delete();
    }

}