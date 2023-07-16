import React, {useEffect} from 'react'
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
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='flex flex-col'>
        <NavBar/>

        <div className='flex flex-col mx-16 my-16'>
            <div className='mt-6'>
                <p className='text-[#E5442A] text-4xl md:text-[40px] font-semibold'>
                    OUR COMPLETED <br className='md:hidden'/> 
                    PROJECTS
                </p>
                <p className='text-black font-semibold text-[36px] mt-4'>
                    Recent Projects
                </p>
            </div>

            <div className='flex flex-col md:flex-row mt-10 md:my-10'>
                <div className='md:mr-10 w-72 md:w-[400px] mb-6 md:mb-0'>
                    <a href=''>
                        <img src={webProject1} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-black font-semibold text-lg mt-7'>
                            Web Development
                        </p>
                    </a>

                </div>
                <div className='md:mx-10 w-72 md:w-[400px] mb-6 md:mb-0'>
                    <a href=''>
                        <img src={creativeProject1} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-black font-semibold text-lg mt-7'>
                            Creative Solution
                        </p>
                    </a>
                </div>
                <div className='md:ml-10 w-72 md:w-[400px] mb-6 md:mb-0'>
                    <a href=''>
                        <img src={webProject2} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-black font-semibold text-lg mt-7'>
                            Web Development
                        </p>
                    </a>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center 
            justify-center md:my-6'>
                <div className='md:mr-10 w-72 md:w-[400px] mb-6 md:mb-6'>
                    <a href=''>
                        <img src={creativeProject2} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-black font-semibold text-lg mt-7'>
                            Creative Solution
                        </p>
                    </a>
                </div>
                <div className='md:mx-10 w-72 md:w-[400px] mb-6 md:mb-6'>
                    <a href=''>
                        <img src={digitalProject2} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-black font-semibold text-lg mt-7'>
                            Digital Branding
                        </p>
                    </a>
                </div>
                <div className='md:ml-10 w-72 md:w-[400px] mb-6 md:mb-6'>
                    <a href=''>
                        <img src={digitalProject1} className='shadow-xl 
                        md:hover:scale-105 duration-700 md:h-[264px]'/>
                        <p className='text-black font-semibold text-lg mt-7'>
                            Digital Branding
                        </p>
                    </a>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='md:mr-10 w-72 md:w-[400px] mb-6 md:mb-4'>
                    <a href=''>
                        <img src={ourProject3} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-black font-semibold text-lg mt-7'>
                            Creative Solution
                        </p>
                    </a>
                </div>
                <div className='md:mx-10 w-72 md:w-[400px] mb-6 md:mb-6'>
                    <a href=''>
                        <img src={ourProject1} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-black font-semibold text-lg mt-7'>
                            Digital Branding
                        </p>
                    </a>
                </div>
                <div className='md:ml-10 w-72 md:w-[400px] md:mb-6'>
                    <a href=''>
                        <img src={ourProject2} className='shadow-xl 
                        md:hover:scale-105 duration-700'/>
                        <p className='text-black font-semibold text-lg mt-7'>
                            Digital Branding
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <div className='border-b-2 border-b-[#d9dde1] mx-2'></div>

        <Footer/>
        {/* comment */}
    </div>
  )
}

export default Projects