import React, {useEffect} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Form from './Form'
import GoogleMap from './GoogleMap'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='overflow-hidden'>
        <NavBar/>

        <div className='my-16'>
          <div className=''>
            <p className='text-[#E5442A] text-3xl md:text-4xl font-semibold text-center'>Contact Us</p>
          </div>

          <div className='flex flex-col md:flex-row lg:mx-24 my-6'>
            <div className='md:mr-10'>
              <GoogleMap/>
            </div>
        
            <div className='md:ml-4'>
            <Form/>
            </div>
          </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Contact