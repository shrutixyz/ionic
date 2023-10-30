import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AblyProvider } from "ably/react";
import { nanoid } from "nanoid";
import { Realtime } from "ably";
import Spaces from "@ably/spaces";

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new Realtime.Promise({
  clientId: nanoid(),
  key: process.env.REACT_APP_VITE_ABLY_KEY,
});

const spaces = new Spaces(client);

root.render(
  <React.StrictMode>
    <AblyProvider client={client}>
      <App spaces={spaces}/>
    </AblyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
