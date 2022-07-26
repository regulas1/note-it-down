import React, { ChangeEventHandler, useState } from "react";
import ReactDOM from "react-dom";
import { Dashboard } from "../components/Dashboard";
import { allNotes } from "../repository/types";

const dummyNotes: allNotes = {
   "site1.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site2.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site3.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
};

ReactDOM.render(
   <Dashboard allNotes={dummyNotes}/>,
   document.getElementById("dashboard")
);
