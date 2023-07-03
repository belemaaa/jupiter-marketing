import React from 'react'
import ourTeam1 from '../assets/team/ourTeam1.jpg'
import ourTeam2 from '../assets/team/ourTeam2.jpg'
import ourTeam3 from '../assets/team/ourTeam3.jpg'
import ourTeam4 from '../assets/team/ourTeam4.jpg'
import { Link } from 'react-router-dom'

const MeetOurTeam = () => {
  return (
    <div className='w-screen overflow-hidden'>
        <div className='pt-12 pb-6'>
            <div>
                <p className='text-orange-700 text-5xl font-light mb-2 md:ml-12 text-center md:text-start'>
                    MEET OUR TEAM
                </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-bold text-gray-800'>OUR EXPERTS</p>
                <div className='border mt-2 w-32 border-gray-800'></div>
            </div>

            <div className='flex flex-col md:flex-row mx-12 mt-8'>
                <div className='mr-6 mb-4 md:mb-0'>
                    <img src={ourTeam4} className='w-80'/>
                    <p className='text-center mt-2 font-semibold'>Manager/CEO</p>
                </div>
                <div className='mr-6 mb-4 md:mb-0'>
                    <img src={ourTeam1}  className='w-80'/>
                    <p className='text-center mt-2 font-semibold'>Product Designer</p>
                </div>
                <div className='mr-6 mb-4 md:mb-0'>
                    <img src={ourTeam2}  className='w-80'/>
                    <p className='text-center mt-2 font-semibold'>Lead Developer</p>
                </div>
                <div>
                    <img src={ourTeam3}  className='w-80'/>
                    <p className='text-center mt-2 font-semibold'>Marketing Manager</p>
                </div>
            </div>

            <div className='flex items-center justify-center mt-5 flex-col'>
               <Link to='/team' className='flex text-white bg-gray-800 py-2 px-4 hover:bg-black duration-500 mt-3 mb-3'>
               VIEW ALL
               </Link>
               {/* <div className='w-20 border-b-4 border-b-gray-800'></div> */}
            </div>
        </div>
    </div>
  )
}

export default MeetOurTeam