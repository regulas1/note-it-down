import { INote } from "../types";
import { DexieRepository } from "./DexieRepository";
import { dexieClient as db } from "./dexieClient";
import { NoteColumns } from "../constants";

export class NoteRepository extends DexieRepository<INote> {
    constructor() {
        super(db.notes);
    }

    async getAllFromUrlId(urlId: number) {
        return await db.notes.where(NoteColumns.SiteId).equals(urlId).toArray();
    }
}