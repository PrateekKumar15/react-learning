import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './Components/card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card username="Bunny" />
    <Card username="Tanu"  btntext= "Visit me" />
  </React.StrictMode>,
)
