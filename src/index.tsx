import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const apiUrl = process.env.SUPABASE_URL;
const apiKey = process.env.SUPABASE_KEY;

console.log("API URL:", apiUrl);
console.log("API Key:", apiKey);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
