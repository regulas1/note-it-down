import React from "react";
import { INote } from "../../database/types";
import { NoteCard } from "./NoteCard";
import "./style/notesContainer.css"

interface NotesContainerProps {
	notes: INote[];
}

export const NotesContainer = ({ notes }: NotesContainerProps) => {
	let key = 0;
	const activeNotes = notes?.map((note) => {
		key++;
		return <NoteCard key={key} note={note.note} />;
	});

	return (
		<div className="notesContainer">
			{activeNotes}
		</div>
	)
}