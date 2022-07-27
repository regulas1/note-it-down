import React, { useState } from "react";
import "./style/siteNavBar.css";

interface sideNavBarProps {
   siteMap: { [site: string]: string };
   setActiveSiteFromTitle: (site: string) => void;
}

export const SiteNavBar = ({
   siteMap,
   setActiveSiteFromTitle,
}: sideNavBarProps) => {
	const [selectedTitle, setSelectedTitle] = useState(-1);

   // TODO: move this peice of code into a separate function getSiteElements() and keep the
   // variables that are being passed too deep in a shared state by using context.
   let key = -1;
   const siteElements = Object.entries(siteMap).map(([site, title]) => {
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
               setActiveSiteFromTitle(site);
            }}
         >
            {title}
         </div>
      );
   });

   return <div className="siteNavBarContainer" style={{}}>{siteElements}</div>;
};
