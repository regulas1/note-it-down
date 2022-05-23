interface note {
    content: string,
    scrollLocation: number
}

interface allNotes {
    [site: string]: note[]
}

const getActiveUrl = () => {
    return window.location.href;
}

const getKeyForData = () => {
    return "write-that-down";
}

const getKeyForSessionNote = () => {
    return "write-that-down-session-note";
}

export const appendNoteOnActiveUrl = async (content: string, scrollLocation: number) => {
    const note:note = {
        content: content,
        scrollLocation: scrollLocation
    }

    const notesOnActiveUrl = await getNotesOnActiveUrl();
    notesOnActiveUrl.push(note);
    await setNotesOnActiveUrl(notesOnActiveUrl);
}

const getNotesOnActiveUrl = async (): Promise<note[]> => {
    const allNotes = await getAllNotes();
    return allNotes[getActiveUrl()] || [];
};

const setNotesOnActiveUrl = async (notes: note[]) => {
    const allNotes = await getAllNotes();
    console.log("allnotes", allNotes);
    allNotes[getActiveUrl()] = notes;
    await setAllNotes(allNotes);
}

export const getAllNotes = async (): Promise<allNotes> => {
    const notes = await chrome.storage.local.get([getKeyForData()]);
    return notes[getKeyForData()] || {};
}

export const setAllNotes = async (notes: allNotes) => {
    await chrome.storage.local.set({[getKeyForData()]: notes});
}

export const setSessionNote = (content: string, scrollLocation: number) => {
    const note:note = {
        content: content,
        scrollLocation: scrollLocation
    }

    sessionStorage.setItem(getKeyForSessionNote(), JSON.stringify(note));
}

export const resetSessionNote = () => {
    setSessionNote("", 0);
}

export const getSessionNote = (): note | null => {
    const noteString = sessionStorage.getItem(getKeyForSessionNote())
    if (noteString) {
        return JSON.parse(noteString);
    }
    return null;
}