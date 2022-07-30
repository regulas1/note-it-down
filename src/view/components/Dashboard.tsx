import React from "react";
import { useEffect, useState } from "react";
import { ChromeRepository } from "../../repository/chromeStorageRepository";
import { allNotes } from "../../repository/types";
import "./style/dashboard.css";
import { SiteNavBar } from "./SiteNavBar";
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
         <div className="infoPage">
            <a href={activeSite}>{activeSite}</a>
            <NotesContainer notes={allNotes[activeSite]} />
         </div>
      </div>
   );
};
