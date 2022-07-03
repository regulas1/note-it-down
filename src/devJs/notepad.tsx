import React, { ChangeEventHandler, useState } from "react";
import ReactDOM from "react-dom";
import { Notepad } from "../components/Notepad"

ReactDOM.render(
   <Notepad scrollLocation={0} />,
   document.getElementById("notepad")
);
