import React from "react";
import ReactDOM from "react-dom";
import { Commands } from "../types";
import { getCurrentTab, request } from "./background";
import "./styles/popup.css";

const Popup = () => {
   return (
      <div>
         <button onClick={async() => {
            const tab = await getCurrentTab();
            chrome.tabs.sendMessage<request>(tab.id ? tab.id : -1, {
               command: Commands.toggelNotepad,
            });
         }}>
            Take Note
         </button>
      </div>
   );
};

ReactDOM.render(
   <React.StrictMode>
      <Popup />
   </React.StrictMode>,
   document.getElementById("root")
);
