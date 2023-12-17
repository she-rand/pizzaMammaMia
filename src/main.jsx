import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PizzaContextProvider from './context/PizzaContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <PizzaContextProvider>
      <BrowserRouter>
      <App />

      </BrowserRouter>
   
    </PizzaContextProvider>

    
     
    
  </React.StrictMode>,
)
