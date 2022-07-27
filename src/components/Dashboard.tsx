import React from "react";
import { useEffect, useState } from "react";
import { ChromeRepository } from "../repository/chromeStorageRepository";
import { Notes } from "./Notes";
import { allNotes } from "../repository/types";
import "./style/dashboard.css";
import { SiteNavBar } from "./SiteNavBar";
import { NoteCard } from "./NoteCard";
import { NotesContainer } from "./NotesContainer";

interface DashboardProps {
   allNotes: allNotes;
}

export const Dashboard = ({ allNotes }: DashboardProps) => {
   const [activeSite, setActiveSite] = useState("");

   const siteMap: { [site: string]: string } = {};
   Object.entries(allNotes).forEach(([site, notes]) => {
      siteMap[site] = notes[0].pageTitle;
   });

   return (
      <div className="dashboardContainer">
         <SiteNavBar
				setActiveSiteFromTitle={(site: string) => {
               setActiveSite(site);
            }}
				siteMap={siteMap}	
         />
         <NotesContainer notes={allNotes[activeSite]} />
      </div>
   );
};
