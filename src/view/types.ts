export enum Commands {
   takeNote = "takeNote",
   takeNoteBackground = "take-note",
   clearAllData = "clearAllData",
}

interface resposne {
   code: number;
}
export type sendResponseType = (response: resposne) => void;
