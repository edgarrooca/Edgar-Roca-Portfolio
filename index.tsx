import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("Iniciando renderizado de la aplicación...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Error crítico: No se encontró el elemento #root");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Aplicación montada con éxito.");
  } catch (error) {
    console.error("Error durante el renderizado:", error);
  }
}