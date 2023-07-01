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
            <div>
                <p className='text-orange-700 text-3xl md:text-4xl font-bold mb-2 text-center'>
                    Our Completed Projects
                </p>
                <p className='text-gray-800 text-2xl md:text-3xl font-bold'>
                    Recent Projects
                </p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Projects