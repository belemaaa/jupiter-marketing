import React from 'react'
import ContactNav from './ContactNav'
import NavBar from './NavBar'
import Footer from './Footer'
import Form from './Form'
import GoogleMap from './GoogleMap'

const Contact = () => {
  return (
    <div>
        <ContactNav/>
        <NavBar/>
        <Form/>
        <GoogleMap/>
        <Footer/>
    </div>
  )
}

export default Contact