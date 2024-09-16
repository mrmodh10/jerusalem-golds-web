import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createHashRouter, createRoutesFromElements , Route , RouterProvider } from 'react-router-dom';
import PrivacyPolicy from './privacyPolicy';
import EmailVerified from './emailVerified';
import ChangePassword from './changePassword';
import PasswordUpdated from './passwordUpdated';
import Home from './home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const route = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Email-Verified" element={<EmailVerified />} />
        <Route path="/Change-Password" element={<ChangePassword />} />
        <Route path="/Password-Updated" element={<PasswordUpdated />} />
        <Route path="/" element={<Home />} />
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);
