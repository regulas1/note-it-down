import React from "react"
import { note } from "../repository/types"

interface NotesProps {
   site: string,
   notes: note[]
}

export const Notes = ({site, notes}: NotesProps) => {
   const notesList = notes.map((note) => {
      return (
         <div>
            <div><b>Note: </b> {note.content}</div>
            <div><b>Scroll: </b> {note.scrollLocation}</div>
         </div>
      );
   })

   return (
      <div>
         <h3><a href={site}>{site}</a></h3>
         {notesList}
      </div>
   )
}