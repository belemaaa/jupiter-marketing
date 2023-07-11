import React from 'react'
import ContactNav from './ContactNav'
import NavBar from './NavBar'
import Footer from './Footer'
import Form from './Form'
import GoogleMap from './GoogleMap'

const Contact = () => {
  return (
    <div>
        <NavBar/>
        <GoogleMap/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact