import React from "react";
import "./style/siteNavBar.css"

interface sideNavBarProps {
   sites: string[]
}

export const SiteNavBar = ({ sites }: sideNavBarProps) => {
	const siteElements = sites.map((site) => {
		return <div className="siteElement">{ site }</div>
	})

	return <div className="siteNavBarContainer">{siteElements}</div>;
}