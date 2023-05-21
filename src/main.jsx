import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/index.css'
// import TheHero01 from './components/hero/TheHero01'
import TodoComponent from './components/todo/TodoComponent'
// import ParenTombol from './components/9-ReactUseStateHook/ParenTombol'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoComponent/>
    {/* <TheHero01/> */}
    {/* <ParenTombol/> */}
  </React.StrictMode>,
)
