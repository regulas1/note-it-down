import React, { useState } from "react";
import { ISite } from "../../database/types";
import "./style/siteNavBar.css";

interface sideNavBarProps {
   allSites: ISite[];
   setActiveSiteFromTitle: (site: ISite) => void;
}

export const SiteNavBar = ({
   allSites,
   setActiveSiteFromTitle,
}: sideNavBarProps) => {
	const [selectedTitle, setSelectedTitle] = useState(-1);

   // TODO: move this peice of code into a separate function getSiteElements() and keep the
   // variables that are being passed too deep in a shared state by using context.
   let key = -1;
   const siteElements = allSites.map((site) => {
      key++;
      const titleKey = key

      let className = "siteElement";

      if (titleKey === selectedTitle) {
         className += " selected";
      }
      
      return (
         <div
            key={key}
            className={className}
				onClick={() => {
					setSelectedTitle(titleKey);
               if (site) {
                  setActiveSiteFromTitle(site);
               } else {
                  throw new Error("Site is undefined");
               }
            }}
         >
            {site.title}
         </div>
      );
   });

   return <div className="siteNavBarContainer" style={{}}>{siteElements}</div>;
};
