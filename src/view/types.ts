// TODO: update these command names, specially take note
// it should be toggle notepad or something
export enum Commands {
   toggelNotepad = "takeNote",
   takeNoteBackground = "take-note",
   takeNote = "saveNote"
}

interface resposne {
   code: number;
}
export type sendResponseType = (response: resposne) => void;
