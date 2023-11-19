import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import './assets/css/index.css'


import Home from './pages/Index.jsx'
import Header01 from './components/Header01.jsx'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     
        <Header01 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
     
    </BrowserRouter>
  </React.StrictMode>,
)
