// Importe react
import React from 'react';
// Importe ReactDOM pour utiliser méthode spécifique
import ReactDOM from 'react-dom/client';
// Importe le style
import "./style/style.css";
// Importe App
import App from './App';

//  Récup id "root", création de la route
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Strictmode pour afficher toutes les erreurs
  <React.StrictMode>
    <App />
  </React.StrictMode>
);