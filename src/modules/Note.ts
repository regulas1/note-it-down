import { NoteRepository } from "../database/dexie/NoteRepository";
import { INote } from "../database/types";
import { Site } from "./Site";

export class Note {
    id?: number;
    note: string;
    siteId: number | null;
    scroll: number;

    private readonly noteRepository = new NoteRepository();

    constructor(note: string, scroll: number, siteId: number | null = null) {
        this.note = note;
        this.scroll = scroll;
        this.siteId = siteId;
    }

    static async getNotesBySiteId(siteId: number): Promise<INote[]> {
        return await NoteRepository.getAllFromSiteId(siteId);
    }

    async addToSite(site: Site) {
        const siteId = await site.addNewSiteAndGetId();
        this.siteId = siteId;  
        this.saveAndSetId();
    }

    async saveAndSetId(): Promise<void> {
        this.id = await this.noteRepository.insertAndGetId({
            note: this.note,
            siteId: this.siteId,
            scroll: this.scroll
        });
    }
}