import React from "react";
import { useEffect, useState } from "react";
import "./style/dashboard.css";
import { SiteNavBar } from "./SiteNavBar";
import { NotesContainer } from "./NotesContainer";
import { Site } from "../../modules/Site";
import { INote, ISite } from "../../database/types";
import { Note } from "../../modules/Note";

export const Dashboard = () => {
   const [activeSite, setActiveSite] = useState<ISite|null>(null);
   const [activeNotes, setActiveNotes] = useState<INote[]>([]);
   const [allSites, setAllSites] = useState<ISite[]>([]);

   // TODO: make a custom hook
   useEffect(() => {
      const getAllSites = async () => {
         setAllSites(await Site.getAllSites());
      }

      const setNotesFromActiveSite = async () => {
         if (activeSite !== null && activeSite.id) {
            setActiveNotes(await Note.getNotesBySiteId(activeSite.id)); 
         }
      }

      getAllSites();
      setNotesFromActiveSite();
   }, [activeSite]);

   if (allSites.length < 1) {
      return (
         <div>
            no sites to display
         </div>
      )
   }

   return (
      <div className="dashboardContainer">
         <SiteNavBar
            setActiveSiteFromTitle={(site: ISite) => {
               setActiveSite(site);
            }}
            allSites={allSites}
         />
         <div className="infoPage">
            <a href={activeSite?.url}>{activeSite?.url}</a>
            <NotesContainer notes={activeNotes} />
         </div>
      </div>
   );
};
