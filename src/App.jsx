import React from 'react'
import Navigation from './components/Navigation'
import Banner from './components/Banner'
import About from './components/About'
import Statstics from './components/Statstics'
import Services from './components/Services'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Blog from './components/Blog'
import Button from './components/Button'

function App() {
  return (
    <div>
        <Navigation/>
        <Banner/>
        <About/>
        <Statstics/>
        <Services/>
        <Feedback/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App
