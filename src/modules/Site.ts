import { SiteRepository } from "../database/dexie/SiteRepository";
import { ISite } from "../database/types";

export class Site implements ISite {
    id?: number;
    url: string;
    title: string;

    private readonly siteRepository = new SiteRepository();

    constructor(url: string, title: string) {
        this.url = url;
        this.title = title;
    }

    setId(id: number) {
        this.id = id;
    }

    async getAllSites(): Promise<ISite[]> {
        return await this.siteRepository.getAll();
    }

    async addNewSiteAndGetId(): Promise<number> {
        const existingSite = await this.siteRepository.getByUrl(this.url);

        if (existingSite?.id !== undefined) {
            this.setId(existingSite.id) 
            return existingSite.id;
        }

        const newSiteId = await this.siteRepository.insertAndGetId(this);
        this.setId(newSiteId);

        return newSiteId;
    }
}