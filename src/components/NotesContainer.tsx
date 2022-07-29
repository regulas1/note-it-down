import React from "react";
import { note } from "../repository/types";
import { NoteCard } from "./NoteCard";
import "./style/notesContainer.css"

interface NotesContainerProps {
   notes: note[];
}

export const NotesContainer = ({ notes }: NotesContainerProps) => {
	let key = 0;
   const activeNotes = notes?.map((note) => {
      key++;
      return <NoteCard key={key} note={note.content} />;
   });

	return (
		<div className="notesContainer">
			{ activeNotes }
		</div>
	)
}