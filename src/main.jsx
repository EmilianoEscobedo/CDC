import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import DataContextProvider from './contexts/DataContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
