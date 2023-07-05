import React from 'react'
import ContactNav from './ContactNav'
import NavBar from './NavBar'
import Home from './Home'
import IndexBody from './IndexBody'
import IndexAbout from './IndexAbout'
import WhatWeDo from './WhatWeDo'
import CompletedProjects from './CompletedProjects'
import MeetOurTeam from './MeetOurTeam'
import Footer from './Footer'

const Index = () => {
  return (
    <div>
        <ContactNav/>
        <NavBar/>
        <Home/> 
        <IndexBody/>
        <IndexAbout/>
        <WhatWeDo/>
        <CompletedProjects/>
        <MeetOurTeam/>
        <Footer/>
    </div>
  )
}

export default Index