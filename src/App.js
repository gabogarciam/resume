import React from 'react';
import { createRoot } from 'react-dom/client';
import Resume from './components/Resume/Resume';
import './styles/global.scss';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
