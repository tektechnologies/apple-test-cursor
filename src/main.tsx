
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Script to avoid flash of wrong theme
const themeScript = document.createElement('script');
themeScript.innerHTML = `
  (function() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })()
`;
document.head.appendChild(themeScript);

createRoot(document.getElementById("root")!).render(<App />);
