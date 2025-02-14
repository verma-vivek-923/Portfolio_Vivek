import React from 'react'
import Contact from '../components/Contact'
import HomeSection from '../components/HomeSection'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div>
        <HomeSection/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home