import React from "react";
import { StatusFlag } from "./StatusFlag";

interface NotepadSwitchProps {
   isMarkdownView: boolean;
   setRenderMarkdown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NotepadSwitch = ({
   isMarkdownView,
   setRenderMarkdown,
}: NotepadSwitchProps) => {

   const buttonContainerStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "row",
      gap: "5px",
   };

   const makeEditorView = () => {
      setRenderMarkdown(false);
   }

   const makeMarkdownView = () => {
      setRenderMarkdown(true);
   }

   return (
      <div style={buttonContainerStyle}>
         <StatusFlag
            text={"editor view"}
            isActive={!isMarkdownView}
            onClick={makeEditorView}
         />
         <StatusFlag
            text={"markdown view"}
            isActive={isMarkdownView}
            onClick={makeMarkdownView}
         />
      </div>
   );
};
