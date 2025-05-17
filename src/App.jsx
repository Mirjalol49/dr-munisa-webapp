
import React from 'react'
import Header from './Pages/Header/Header'
import Main from './Pages/Main/Main'
import Footer from './Pages/Footer/Footer'
import useScrollReveal from './utils/useScrollReveal'
import './utils/scrollReveal.css'
function App() {
  // Initialize scroll reveal animations
  useScrollReveal();

  return (
   <>
   <Header />
   <Main />
   <Footer />
   </>
  )
}

export default App
