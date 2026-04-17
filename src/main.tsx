/// <reference types="vite/client" />
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { db } from './firebase';
import { doc, getDocFromServer } from 'firebase/firestore';

// Validate Connection to Firestore
async function testConnection() {
  try {
    await getDocFromServer(doc(db, '_connection_test_', 'ping'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. The client is offline.");
    }
  }
}

testConnection();

// Load Google Tag Manager apenas online para não quebrar site com bugs de fetch
if (window.location.hostname === "voodecolarnodigital-png.github.io") {
  const script = document.createElement('script');
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16551201171";
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]){(window as any).dataLayer.push(args);}
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'AW-16551201171');

  document.addEventListener('click', function(e) {
    const target = (e.target as HTMLElement).closest('a');
    if (target && target.href && target.href.includes('wa.me')) {
      gtag('event', 'conversion', {
        'send_to': 'AW-16551201171/3G2HCIm74JwcEJOTndQ9'
      });
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);