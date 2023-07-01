import React from 'react'
import recentProject1 from '../assets/recent-project1.jpg'
import recentProject2 from '../assets/recent-image3.jpg'
import recentProject3 from '../assets/recent-image4.jpg'
import { Link } from 'react-router-dom'

const CompletedProjects = () => {
  return (
    <div className='flex flex-col mt-16 relative bg-black bg-opacity-10 w-screen overflow-hidden'>
      <div className='pt-12 pb-4'>
        <div className='flex items-center justify-center flex-col mb-4'>
              <p className='text-orange-700 text-3xl md:text-4xl font-bold mb-2 text-center'>
                OUR COMPLETED <br className='md:hidden'/> PROJECTS
              </p>
              <p className='text-gray-800 text-2xl md:text-3xl font-bold'>Recent Projects</p>
              <div className='border-2 mt-3 w-12 border-pink-300 '></div>
        </div>

        <div className='mx-12 flex flex-col md:flex-row items-center justify-between'>
          <div className='mb-4 md:mb-0'>
            <img src={recentProject1} className='w-96 hover:scale-110 duration-500'/>
            <p className='text-center mt-4 text-2xl font-bold text-gray-800'>ARCHITECTURE</p>
          </div>

          <div className='mb-4 md:mb-0'>
            <img src={recentProject2} className='w-96 hover:scale-110 duration-500'/>
            <p className='text-center mt-4 text-2xl font-bold text-gray-800'>DEVELOPMENT</p>
          </div>

          <div className='mb-4 md:mb-0'>
            <img src={recentProject3} className='w-96 hover:scale-110 duration-500'/>
            <p className='text-center mt-4 text-2xl font-bold text-gray-800'>DESIGN</p>
          </div>
        </div>

        <div className='flex items-center justify-center md:justify-end mt-3 md:mt-5'>
          <Link to='/projects' className='flex text-white bg-gray-700 py-2 px-3 hover:bg-black duration-500 mt-5 md:mr-20'>
            All Projects
          </Link>
        </div>
        {/* <div className='flex items-center justify-end'>
          <div className='w-32 mr-20 border-b border-b-orange-800'></div>
        </div> */}
      </div>

    </div>
  )
}

export default CompletedProjects