import Home from './components/home'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route} 
from 'react-router-dom'

import './App.css'

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>  
          <Route exact path='/' element={<Home />} />
          <Route exact path='/landing-page' element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
