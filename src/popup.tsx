import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './styles/popup.css'

const Popup = () => {

  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    chrome.storage.sync.get("color", ({ color }) => {
      setBgColor(color);
    })
  }, []);

  const changeBgColor = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id ? tab.id : -1 },
      func: setPageBgColor
    });
  };

  const setPageBgColor = () => {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    })
  }

  return (
    <>
      <button style={{backgroundColor: bgColor}} id="changeColor" onClick={changeBgColor}></button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
