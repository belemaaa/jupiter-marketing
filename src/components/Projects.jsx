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

        <div className='flex flex-col'>
            <div className='mt-20'>
                <p className='text-orange-700 text-3xl md:text-4xl font-bold mb-2 text-center'>
                    Our Completed Projects
                </p>
                <p className=' text-center'>
                    Have a look at some of our recent projects:
                </p>
            </div>

            <div className='flex flex-col items-center justify-center py-8'>
                <div className='mx-6 w-96 shadow-2xl'>
                    <img src={creativeProject1} className=''/>
                    <p></p>
                </div>
                <div className='mx-6 w-96 shadow-2xl'>
                    <img src={creativeProject2}/>
                    <p></p>
                </div>
                <div className='mx-6 w-96 shadow-2xl'>
                    <img src={digitalProject2}/>
                    <p></p>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center py-8'>
                <div className='mx-6 w-96 shadow-2xl'>
                    <img src={digitalProject1} className=''/>
                    <p></p>
                </div>
                <div className='mx-6 w-96 shadow-2xl'>
                    <img src={ourProject1}/>
                    <p></p>
                </div>
                <div className='mx-6 w-96 shadow-2xl'>
                    <img src={ourProject2}/>
                    <p></p>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center py-8'>
                <div className='mx-6 w-96 shadow-2xl'>
                    <img src={ourProject3} className=''/>
                    <p></p>
                </div>
                <div className='mx-6 w-96 shadow-2xl'>
                    <img src={webProject1}/>
                    <p></p>
                </div>
                <div className='mx-6 w-96 shadow-2xl'>
                    <img src={webProject2}/>
                    <p></p>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Projects