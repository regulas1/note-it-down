import React from "react";
import "./style/siteNavBar.css";

interface sideNavBarProps {
   siteMap: { [site: string]: string };
   setActiveSiteFromTitle: (site: string) => void;
}

export const SiteNavBar = ({
	siteMap,
   setActiveSiteFromTitle,
}: sideNavBarProps) => {
   let key = 0;
   const siteElements = Object.entries(siteMap).map(([site, title]) => {
      key++;
      return (
         <div
            key={key}
            className="siteElement"
            onClick={() => {
               setActiveSiteFromTitle(site);
            }}
         >
            {title}
         </div>
      );
   });

   return <div className="siteNavBarContainer">{siteElements}</div>;
};
