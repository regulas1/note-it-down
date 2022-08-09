import { ISite } from "../types";
import { DexieRepository } from "./DexieRepository";
import { dexieClient as db } from "./dexieClient";
import { SiteColumns } from "../constants";

export class SiteRepository extends DexieRepository<ISite> {
    constructor() {
        super(db.sites);
    }

    async getByUrl(url: string): Promise<ISite | undefined> {
        return await db.sites.where(SiteColumns.Url).equals(url).first();
    }

    static async getAll(): Promise<ISite[]> {
        return await db.sites.toArray();
    }
}