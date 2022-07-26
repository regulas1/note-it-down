import React from "react";
import "./style/siteNavBar.css"

interface sideNavBarProps {
   siteTitles: string[]
}

export const SiteNavBar = ({ siteTitles }: sideNavBarProps) => {
   const siteElements = siteTitles.map((title) => {
      return <div className="siteElement">{title}</div>;
   });

   return <div className="siteNavBarContainer">{siteElements}</div>;
};