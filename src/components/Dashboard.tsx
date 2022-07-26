import React from "react";
import { useEffect, useState } from "react";
import { ChromeRepository } from "../repository/chromeStorageRepository";
import { Notes } from "./Notes";
import { allNotes } from "../repository/types";
import "./style/dashboard.css";
import { SiteNavBar } from "./SiteNavBar";

interface DashboardProps {
   allNotes: allNotes;
}

export const Dashboard = ({ allNotes }: DashboardProps) => {
   let key = 0;
   // const siteList = Object.entries(allNotes).map(([site, notes]) => {
   //    key++;
   //    return <Notes key={key} site={site} notes={notes} />;
   // });

   const sites = Object.entries(allNotes).map(([site]) => {
		return site;
   });

   return (
      <div className="dashboardContainer">
         <SiteNavBar sites={sites}/>
         <div>hello</div>
      </div>
   );
};
