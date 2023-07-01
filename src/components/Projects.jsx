import React from 'react'
import ContactNav from './ContactNav'
import NavBar from './NavBar'
import Footer from './Footer'
import creativeProject1 from '../assets/projects/creativeProject1.jpg'
import creativeProject2 from '../assets/projects/creativeProject2.jpg'
import digitalProject1 from '../assets/projects/digitalProject.jpg'
import digitalProject2 from '../assets/projects/digitalProject1.jpg'
import ourProject1 from '../assets/projects/ourProject1.png'
import ourProject2 from '../assets/projects/ourProject2.png'
import ourProject3 from '../assets/projects/ourProject3.jpg'
import webProject1 from '../assets/projects/webProject1.jpg'
import webProject2 from '../assets/projects/webProject2.jpg'


const Projects = () => {
  return (
    <div className='flex flex-col'>
        <ContactNav/>
        <NavBar/>

        <div className='flex flex-col bg-black bg-opacity-5 pt-6 pb-12'>
            <div className='mt-20'>
                <p className='text-orange-700 text-3xl md:text-4xl font-bold mb-2 text-center'>
                    Our Completed Projects
                </p>
                <p className='text-gray-700 font-bold text-center'>
                    Have a look at some of our recent projects:
                </p>
            </div>

            <div className='flex flex-row items-center justify-center my-10'>
                <div className='mx-8 w-96 hover:scale-110 duration-700'>
                    <a href=''>
                        <img src={creativeProject1} className='shadow-xl rounded-2xl'/>
                        <p className='text-center text-gray-500 font-bold text-lg mt-4'>INSURANCE</p>
                    </a>

                </div>
                <div className='mx-8 w-96 hover:scale-110 duration-700'>
                    <a href=''>
                        <img src={creativeProject2} className='shadow-xl rounded-2xl'/>
                        <p className='text-center text-gray-500 font-bold text-lg mt-4'>BEE</p>
                    </a>
                </div>
                <div className='mx-8 w-96 hover:scale-110 duration-700'>
                    <a href=''>
                        <img src={digitalProject2} className='shadow-xl rounded-2xl'/>
                        <p className='text-center text-gray-500 font-bold text-lg mt-4'>INDUSTRIAL SERVICE</p>
                    </a>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center my-10'>
                <div className='mx-8 w-96 hover:scale-110 duration-700'>
                    <a href=''>
                        <img src={digitalProject1} className='shadow-xl rounded-2xl'/>
                        <p className='text-center text-gray-500 font-bold text-lg mt-4'>ARCHITECT DIGITAL STUDIO</p>
                    </a>
                </div>
                <div className='mx-8 w-96 hover:scale-110 duration-700'>
                    <a href=''>
                        <img src={ourProject1} className='shadow-xl rounded-2xl'/>
                        <p className='text-center text-gray-500 font-bold text-lg mt-4'>S E O</p>
                    </a>
                </div>
                <div className='mx-8 w-96 hover:scale-110 duration-700'>
                    <a href=''>
                        <img src={ourProject2} className='shadow-xl rounded-2xl'/>
                        <p className='text-center text-gray-500 font-bold text-lg mt-4'>DIGITAL CREATE</p>
                    </a>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center my-10'>
                <div className='mx-8 w-96 hover:scale-110 duration-700'>
                    <a href=''>
                        <img src={ourProject3} className='shadow-xl rounded-2xl'/>
                        <p className='text-center text-gray-500 font-bold text-lg mt-4'>CONTENT CREATOR</p>
                    </a>
                </div>
                <div className='mx-8 w-96 hover:scale-110 duration-700'>
                    <a href=''>
                        <img src={webProject1} className='shadow-xl rounded-2xl'/>
                        <p className='text-center text-gray-500 font-bold text-lg mt-4'>SELLING.</p>
                    </a>
                </div>
                <div className='mx-8 w-96 hover:scale-110 duration-700'>
                    <a href=''>
                        <img src={webProject2} className='shadow-xl rounded-2xl'/>
                        <p className='text-center text-gray-500 font-bold text-lg mt-4'>RELIEF</p>
                    </a>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Projects