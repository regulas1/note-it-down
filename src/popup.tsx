import React from "react";
import ReactDOM from "react-dom";
import { getCurrentTab, request } from "./background";
import "./styles/popup.css";

const Popup = () => {
   return (
      <div style={{height: "30px", width: "30px", background: "red"}}>
         <button onClick={async() => {
            const tab = await getCurrentTab();
            chrome.tabs.sendMessage<request>(tab.id ? tab.id : -1, {
               command: "blurBody",
            });
         }}>
            Hello
         </button>
         <button onClick={async () => {
            const tab = await getCurrentTab();
            chrome.tabs.sendMessage<request>(tab.id ? tab.id : -1, {
               command: "clearAllData",
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
