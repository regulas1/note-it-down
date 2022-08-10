import React from "react";
import { useEffect, useState } from "react";
import { ChromeRepository } from "../../modules/chromeStorageRepository";
import { allNotes } from "../../modules/types";
import "./style/dashboard.css";
import { SiteNavBar } from "./SiteNavBar";
import { NotesContainer } from "./NotesContainer";
import { Site } from "../../modules/Site";
import { INote, ISite } from "../../database/types";
import { Note } from "../../modules/Note";

interface DashboardProps {
   allNotes: allNotes;
}

export const Dashboard = ({ allNotes }: DashboardProps) => {
   const [activeSiteId, setActiveSiteId] = useState(-1);
   const [activeNotes, setActiveNotes] = useState<INote[]>([]);
   const [allSites, setAllSites] = useState<ISite[]>([]);

   useEffect(() => {
      const getAllSites = async () => {
         setAllSites(await Site.getAllSites());
      }

      const setNotesFromActiveSite = async () => {
         if (activeSiteId !== -1) {
            setActiveNotes(await Note.getNotesBySiteId(activeSiteId)); 
         }
      }

      console.log("I am in the dashboard useeffect")

      getAllSites();
      setNotesFromActiveSite();
   }, [activeSiteId]);

   const getActiveUrl = (): string => {
      const site = allSites.filter(site => site.id === activeSiteId);
      console.log("this is the site", site)
      if (site.length < 1) {
         return "";
      }
      return site[0].url;
   }

   console.log(allSites);

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
            setActiveSiteFromTitle={(siteId: number) => {
               setActiveSiteId(siteId);
            }}
            siteMap={allSites}
         />
         <div className="infoPage">
            <a href={getActiveUrl()}>{getActiveUrl()}</a>
            <NotesContainer notes={activeNotes} />
         </div>
      </div>
   );
};
