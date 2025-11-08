// /scrollLock.js

let scrollPosition = 0;
let isLocked = false;

export const disableScroll = () => {
  if (isLocked) return;
  
  // Save current scroll position
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  // Apply styles to both html and body to cover all cases
  const html = document.documentElement;
  const body = document.body;
  
  // Lock html element (most important)
  html.style.overflow = 'hidden';
  html.style.position = 'fixed';
  html.style.width = '100%';
  html.style.height = '100%';
  html.style.top = `-${scrollPosition}px`;
  html.style.left = '0';
  
  // Lock body as backup
  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.width = '100%';
  body.style.height = '100%';
  body.style.top = `-${scrollPosition}px`;
  body.style.left = '0';
  
  // Hide scrollbars specifically
  html.style.scrollbarWidth = 'none'; // Firefox
  html.style.msOverflowStyle = 'none'; // IE/Edge
  body.style.scrollbarWidth = 'none'; // Firefox
  body.style.msOverflowStyle = 'none'; // IE/Edge
  
  // Add class for WebKit browsers (Chrome, Safari)
  html.classList.add('no-scrollbar');
  body.classList.add('no-scrollbar');
  
  isLocked = true;
  
  console.log('Scroll disabled - Position saved:', scrollPosition);
};

export const enableScroll = () => {
  if (!isLocked) return;
  
  const html = document.documentElement;
  const body = document.body;
  
  // Remove styles from html
  html.style.overflow = '';
  html.style.position = '';
  html.style.width = '';
  html.style.height = '';
  html.style.top = '';
  html.style.left = '';
  html.style.scrollbarWidth = '';
  html.style.msOverflowStyle = '';
  
  // Remove styles from body
  body.style.overflow = '';
  body.style.position = '';
  body.style.width = '';
  body.style.height = '';
  body.style.top = '';
  body.style.left = '';
  body.style.scrollbarWidth = '';
  body.style.msOverflowStyle = '';
  
  // Remove WebKit class
  html.classList.remove('no-scrollbar');
  body.classList.remove('no-scrollbar');
  
  // Restore scroll position
  window.scrollTo(0, scrollPosition);
  
  isLocked = false;
  
  console.log('Scroll enabled - Position restored:', scrollPosition);
};

export const isScrollLocked = () => isLocked;

// Utility to just hide scrollbars without disabling scroll
export const hideScrollbars = () => {
  const html = document.documentElement;
  const body = document.body;
  
  html.style.scrollbarWidth = 'none';
  html.style.msOverflowStyle = 'none';
  body.style.scrollbarWidth = 'none';
  body.style.msOverflowStyle = 'none';
  html.classList.add('no-scrollbar');
  body.classList.add('no-scrollbar');
};

export const showScrollbars = () => {
  const html = document.documentElement;
  const body = document.body;
  
  html.style.scrollbarWidth = '';
  html.style.msOverflowStyle = '';
  body.style.scrollbarWidth = '';
  body.style.msOverflowStyle = '';
  html.classList.remove('no-scrollbar');
  body.classList.remove('no-scrollbar');
};