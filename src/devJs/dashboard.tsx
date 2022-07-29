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
   "site4.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site5.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site6.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site7.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site8.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site9.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site11.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site12.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site43.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site44.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site45.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site46.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site47.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site48.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site49.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site40.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site434.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site43e4.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "sites4.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "sitae4.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "sitre4.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "siteaf4.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "sitwere4.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site234q54.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "site4adc.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "siteawef4.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "siasdfte4.com": [
      {
         content: "hello",
         scrollLocation: 10,
         pageTitle: "title",
      },
   ],
   "sasfite4.com": [
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
