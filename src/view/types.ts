// TODO: update these command names, specially take note
// it should be toggle notepad or something
export enum Commands {
   takeNote = "takeNote",
   takeNoteBackground = "take-note",
   clearAllData = "clearAllData",
   saveNote = "saveNote"
}

interface resposne {
   code: number;
}
export type sendResponseType = (response: resposne) => void;
