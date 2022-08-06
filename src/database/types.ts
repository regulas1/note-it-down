import { TableNames } from "./constants";

export interface INote {
    id?: number;
    note: string;
    siteId: number | null;
    scroll: number;
}

/**
 * This interface is used to udpate an existing
 * Note entry in the database.
 */
export interface UpdatedNote {
    note?: string;
    siteId?: number;
    scroll?: number;
}

export interface ISite {
    id?: number;
    url: string;
    title: string;
}

/**
 * This interface is used to udpate an existing
 * Site entry in the database.
 */
 export interface UpdatedSite {
    url?: string;
    title?: string;
}

export type TableTypes = INote | ISite;

export type UpdatedTableObject = UpdatedSite | UpdatedNote

export type TableNamesType = TableNames.Note | TableNames.Site
