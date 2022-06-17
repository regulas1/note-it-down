import React from "react";
import ReactDOM from "react-dom";
import { getCurrentTab, request } from "./background";
import "./styles/popup.css";
import { Commands } from "./type";

const Popup = () => {
   return (
      <div>
         <button onClick={async() => {
            const tab = await getCurrentTab();
            chrome.tabs.sendMessage<request>(tab.id ? tab.id : -1, {
               command: Commands.takeNote,
            });
         }}>
            Hello
         </button>
         <button onClick={async () => {
            const tab = await getCurrentTab();
            chrome.tabs.sendMessage<request>(tab.id ? tab.id : -1, {
               command: Commands.clearAllData,
            });
         }}>
            Clear
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
