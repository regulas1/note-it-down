import React, { useState } from "react";
import { ISite } from "../../database/types";
import "./style/siteNavBar.css";

interface sideNavBarProps {
   siteMap: ISite[];
   setActiveSiteFromTitle: (siteId: number) => void;
}

export const SiteNavBar = ({
   siteMap,
   setActiveSiteFromTitle,
}: sideNavBarProps) => {
	const [selectedTitle, setSelectedTitle] = useState(-1);

   // TODO: move this peice of code into a separate function getSiteElements() and keep the
   // variables that are being passed too deep in a shared state by using context.
   let key = -1;
   const siteElements = siteMap.map((site) => {
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
               if (site.id) {
                  setActiveSiteFromTitle(site.id);
               } else {
                  throw new Error("Title does not have a site id");
               }
            }}
         >
            {site.title}
         </div>
      );
   });

   return <div className="siteNavBarContainer" style={{}}>{siteElements}</div>;
};
