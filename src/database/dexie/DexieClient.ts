import Dexie from "dexie";
import { NoteColumns, SiteColumns } from "../constants";
import { INote, ISite } from "../types";

const DatabaseName = "MainDatabase";

class DexieClient extends Dexie {
    notes!: Dexie.Table<INote, number>;
    sites!: Dexie.Table<ISite, number>;    

    constructor() {

        super(DatabaseName);

        const db = this;

        db.version(1).stores({
            notes: `++${NoteColumns.Id}, ${NoteColumns.Note}, ${NoteColumns.SiteId}, ${NoteColumns.Scroll}`,
            sites: `++${SiteColumns.Id}, &${SiteColumns.Url}, ${SiteColumns.Title}`,
        });
    }
}


export const dexieClient = new DexieClient();