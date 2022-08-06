import { NoteRepository } from "../database/dexie/NoteRepository";
import { INote, ISite } from "../database/types";
import { Site } from "./Site";

class Note implements INote {
    id?: number;
    note: string;
    siteId: number | null;
    scroll: number;

    private readonly noteRepository = new NoteRepository();

    private constructor(note: string, siteId: number | null = null, scroll: number) {
        this.note = note;
        this.siteId = siteId;
        this.scroll = scroll;
    }

    async getNotesByUrlId(urlId: number) {
        return await this.noteRepository.getAllFromUrlId(urlId);
    }

    async addToSite(site: Site) {
        const siteId = await site.addNewSiteAndGetId();
        this.siteId = siteId;  
        this.saveAndSetId();
    }

    async saveAndSetId(): Promise<void> {
        this.id = await this.noteRepository.insertAndGetId(this);
    }
}