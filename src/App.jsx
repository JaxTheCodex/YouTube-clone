import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar';
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'

function App() {
  const [sidebar,setSidebar]=useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/> }></Route>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}></Route>
      </Routes>
    </div>
  )
}

export default App;




