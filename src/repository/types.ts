export interface note {
    content: string;
    scrollLocation: number;
}

export interface allNotes {
   [site: string]: note[];
}
