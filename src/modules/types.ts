export interface note {
    pageTitle: string;
    content: string;
    scrollLocation: number;
}

export interface allNotes {
   [site: string]: note[];
}
