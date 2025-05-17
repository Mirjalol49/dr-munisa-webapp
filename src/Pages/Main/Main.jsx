import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Results from './Results/Results'
import About from './About/About'   
import Faq from './Faq/Faq'
import CTA from './CTA/CTA'
const Main = () => {
  return (
    <main>
      <Hero />
      <Services/>
      <Results/>
      <About/>
      <Faq/>
      <CTA/>
    </main>
  )
}

export default Main
