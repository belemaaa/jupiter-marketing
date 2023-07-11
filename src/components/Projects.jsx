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
        <NavBar/>

        <div className='flex flex-col pt-6 pb-12'>
            <div className='mt-1 md:mt-5'>
                <p className='text-orange-600 text-4xl md:text-5xl font-bold m-3'>
                    OUR COMPLETED <br className='md:hidden'/> 
                    PROJECTS
                </p>
                <p className='text-black font-semibold text-3xl m-3'>
                    Recent Projects
                </p>
            </div>

            <div className='flex flex-col md:flex-row items-center 
            justify-center mt-10 md:my-10'>
                <div className='mx-12 w-96 md:w-80 mb-6 md:mb-0'>
                    <a href=''>
                        <img src={creativeProject1} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Web Development
                        </p>
                    </a>

                </div>
                <div className='mx-12 w-96 md:w-80 mb-6 md:mb-0'>
                    <a href=''>
                        <img src={creativeProject2} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Creative Solution
                        </p>
                    </a>
                </div>
                <div className='mx-12 w-96 md:w-80 mb-6 md:mb-0'>
                    <a href=''>
                        <img src={digitalProject2} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Web Development
                        </p>
                    </a>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center 
            justify-center md:my-10'>
                <div className='mx-12 w-96 md:w-80 mb-6 md:mb-6'>
                    <a href=''>
                        <img src={digitalProject1} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Creative Solution
                        </p>
                    </a>
                </div>
                <div className='mx-12 w-96 md:w-80 mb-6 md:mb-6'>
                    <a href=''>
                        <img src={ourProject1} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Digital Branding
                        </p>
                    </a>
                </div>
                <div className='mx-12 w-96 md:w-80 mb-6 md:mb-6'>
                    <a href=''>
                        <img src={ourProject2} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Digital Branding
                        </p>
                    </a>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='mx-12 w-96 md:w-80 mb-6 md:mb-6'>
                    <a href=''>
                        <img src={ourProject3} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Creative Solution
                        </p>
                    </a>
                </div>
                <div className='mx-12 w-96 md:w-80 mb-6 md:mb-6'>
                    <a href=''>
                        <img src={webProject1} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Digital Branding
                        </p>
                    </a>
                </div>
                <div className='mx-12 w-96 md:w-80 md:mb-6'>
                    <a href=''>
                        <img src={webProject2} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Digital Branding
                        </p>
                    </a>
                </div>
            </div>
        </div>

        <Footer/>
        {/* comment */}
    </div>
  )
}

export default Projects