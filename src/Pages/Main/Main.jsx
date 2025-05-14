import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Results from './Results/Results'
import About from './About/About'   
import Faq from './Faq/Faq'
const Main = () => {
  return (
    <main>
      <Hero />
      <Services/>
      <Results/>
      <About/>
      <Faq/>
    </main>
  )
}

export default Main
