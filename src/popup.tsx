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

  const executeBlurAllButPlayer = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id ? tab.id : -1 },
      func: blurAllButPlayer
    });
  };

  const blurAllButPlayer = () => {
    const comments = document.querySelector<HTMLElement>("#comments");
    const secondary = document.querySelector<HTMLElement>("#secondary"); 
    const primaryInfoRenderer = document.querySelector<HTMLElement>("ytd-video-secondary-info-renderer");
    const secondaryInfoRenderer = document.querySelector<HTMLElement>("ytd-video-primary-info-renderer");
    if (comments && secondary && primaryInfoRenderer && secondaryInfoRenderer) {
      comments.style.filter = "blur(3px)";
      secondary.style.filter = "blur(3px)";
      primaryInfoRenderer.style.filter = "blur(3px)";
      secondaryInfoRenderer.style.filter = "blur(3px)";
    }
  }

  return (
    <>
      <button style={{backgroundColor: bgColor}} id="changeColor" onClick={executeBlurAllButPlayer}></button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
