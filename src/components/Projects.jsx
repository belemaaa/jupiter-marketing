import React from 'react'
import ContactNav from './ContactNav'
import NavBar from './NavBar'
import Footer from './Footer'

const Projects = () => {
  return (
    <div className='flex flex-col'>
        <ContactNav/>
        <NavBar/>

        <div className='flex flex-col'>
            <div className='mt-20'>
                <p className='text-black text-3xl md:text-4xl font-bold mb-2 text-center'>
                    Our Completed Projects
                </p>
                <p className=' text-center'>
                    Have a look at some of our recent projects amongst others:
                </p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Projects