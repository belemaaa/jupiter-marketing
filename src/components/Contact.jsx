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

        <div className='my-16'>
          <div className=''>
            <p className='text-[#E5442A] text-4xl md:text-4xl font-semibold text-center'>Contact Us</p>
          </div>

          <div className='flex flex-row mx-24 my-6'>
            <div className='mr-10'>
              <GoogleMap/>
            </div>
        
            <div className='ml-4'>
            <Form/>
            </div>
          </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Contact