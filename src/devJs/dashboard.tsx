import React, { ChangeEventHandler, useState } from "react";
import ReactDOM from "react-dom";
import { Dashboard } from "../components/Dashboard";
import { allNotes } from "../repository/types";

const dummyNotes: allNotes = {
   "site1.com": [
      {
         content: "hello",
         scrollLocation: 10,
      },
      {
         content: "hello",
         scrollLocation: 10,
      },
   ],
   "site2.com": [
      {
         content: "hello",
         scrollLocation: 10,
      },
      {
         content: "hello",
         scrollLocation: 10,
      },
   ],
   "site3.com": [
      {
         content: "hello",
         scrollLocation: 10,
      },
      {
         content: "hello",
         scrollLocation: 10,
      },
   ],
};

ReactDOM.render(
   <Dashboard allNotes={dummyNotes}/>,
   document.getElementById("dashboard")
);
