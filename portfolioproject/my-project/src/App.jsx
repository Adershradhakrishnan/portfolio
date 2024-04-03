import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route,Link,useParams } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import './App.css'

function App() {
 
  return (
    <Router>
    <div>
      <Routes>
         <Route path="/" exact element={<Navbar/>}/>  
        <Route path="/content" exact element={<Content/>}/>
         
      </Routes>
      
    </div>
    </Router>
  )
}

export default App
