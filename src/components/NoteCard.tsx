import React from "react";
import "./style/noteCard.css"

interface NoteCardProps {
   note: string;
}

export const NoteCard = ({ note }: NoteCardProps) => {

   return (
      <div className="noteCard">
			{ note }
      </div>
   );
};
