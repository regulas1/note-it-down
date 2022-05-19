import React from "react";

interface StatusFlagProps {
   text: string;
   isActive: boolean;
   onClick: () => void;
}

export const StatusFlag = ({ text, isActive, onClick }: StatusFlagProps) => {

   const buttonStyle: React.CSSProperties = {
      borderRadius: "9px",
      border: "none",
      outline: "none",
      color: "#1d2021",
      background: isActive ? "#b8bb26" : "#665c54", 
		padding: "0px 8px",
		cursor: "pointer"
	};
	
	return (
      <div style={buttonStyle} onClick={onClick}>
         {text}
      </div>
   );
}