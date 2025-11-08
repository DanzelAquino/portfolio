// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Global scroll control functions
export const disableBodyScroll = () => {
  const scrollY = window.scrollY;
  
  // Add the no-scrollbar class
  document.documentElement.classList.add('no-scrollbar');
  document.body.classList.add('no-scrollbar');
  
  // Apply positioning styles
  document.documentElement.style.position = 'fixed';
  document.documentElement.style.width = '100%';
  document.documentElement.style.height = '100%';
  document.documentElement.style.top = `-${scrollY}px`;
  
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.height = '100%';
  
  // Save scroll position
  window.scrollPosition = scrollY;
}

export const enableBodyScroll = () => {
  // Remove the no-scrollbar class
  document.documentElement.classList.remove('no-scrollbar');
  document.body.classList.remove('no-scrollbar');
  
  // Remove positioning styles
  document.documentElement.style.position = '';
  document.documentElement.style.width = '';
  document.documentElement.style.height = '';
  document.documentElement.style.top = '';
  
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.height = '';
  
  // Restore scroll position
  if (window.scrollPosition !== undefined) {
    window.scrollTo(0, window.scrollPosition);
    window.scrollPosition = undefined;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)