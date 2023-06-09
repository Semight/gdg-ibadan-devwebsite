import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Homepage/Home'
import About from './pages/About'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Event from './pages/event/page'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import EmailVerification from './pages/EmailVerification/EmailVerification'

function App() {
  return (
    <Box w='90%' mx='auto'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/verification' element={<EmailVerification />} />
          <Route path='/events' element={<Event />} />
          {/* <Route path='/contact' element={<Layout />} />
          <Route path='/login' element={<Layout />} /> */}
        </Routes>
        <Footer />
      </Router>
    </Box>
  )
}

export default App
