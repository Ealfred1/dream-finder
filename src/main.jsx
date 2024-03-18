import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { DataProvider } from './context/DataProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <PrimeReactProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </PrimeReactProvider>
      </Router>
  </React.StrictMode>,
)
