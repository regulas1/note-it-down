import { SiteRepository } from "../database/dexie/SiteRepository";
import { ISite } from "../database/types";

export class Site {
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

    static async getAllSites(): Promise<ISite[]> {
        return await SiteRepository.getAll();
    }

    async addNewSiteAndGetId(): Promise<number> {
        const existingSite = await this.siteRepository.getByUrl(this.url);

        if (existingSite?.id !== undefined) {
            this.setId(existingSite.id) 
            return existingSite.id;
        }

        const newSiteId = await this.siteRepository.insertAndGetId({
            url: this.url,
            title: this.title
        });
        
        this.setId(newSiteId);

        return newSiteId;
    }
}