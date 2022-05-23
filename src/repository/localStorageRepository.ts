interface note {
    content: string,
    scrollLocation: number
}

const getActiveUrl = () => {
    return window.location.href;
}

const getKeyForActiveUrl = () => {
    return getActiveUrl() + "write-that-down";
}

const getKeyForSessionNote = () => {
    return getActiveUrl() + "write-that-down-session-note";
}

export const appendNoteOnActiveUrl = (content: string, scrollLocation: number) => {
    const note:note = {
        content: content,
        scrollLocation: scrollLocation
    }

    const notesOnActiveUrl = getNotesOnActiveUrl();

    notesOnActiveUrl.push(note);

    localStorage.setItem(getKeyForActiveUrl(), JSON.stringify(notesOnActiveUrl));
}

export const setSessionNote = (content: string, scrollLocation: number) => {
    const note:note = {
        content: content,
        scrollLocation: scrollLocation
    }

    sessionStorage.setItem(getKeyForSessionNote(), JSON.stringify(note));
}

export const getSessionNote = (): note | null => {
    const noteString = sessionStorage.getItem(getKeyForSessionNote())
    if (noteString) {
        return JSON.parse(noteString);
    }
    return null;
}

export const getNotesOnActiveUrl = ():note[] => {
    const notesString = localStorage.getItem(getKeyForActiveUrl());

    if (notesString) {
        const notes:note[] = JSON.parse(notesString);
        return notes;
    }

    return [];
}