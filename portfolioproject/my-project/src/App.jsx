import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route,Link,useParams } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Education from './components/Education/Education';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css'

function App() {
 
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" exact element={<Content/>}/>
         <Route path='/education' exact element={<Education/>}/>
         <Route path='/projects' exact element={<Project/>}/>
         <Route path='/contact' exact element={<Contact/>}/>
      </Routes>
      
    </div>
    </Router>
  )
}

export default App
