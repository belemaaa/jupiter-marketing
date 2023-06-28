import React from 'react'
import ourTeam1 from '../assets/team/ourTeam1.jpg'
import ourTeam2 from '../assets/team/ourTeam2.jpg'
import ourTeam3 from '../assets/team/ourTeam3.jpg'
import ourTeam4 from '../assets/team/ourTeam4.jpg'

const MeetOurTeam = () => {
  return (
    <div className=''>
        <div className='pt-12 pb-6'>
            <div>
                <p className='text-orange-700 text-5xl font-light mb-2 ml-12'>
                    MEET OUR TEAM
                </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-bold text-gray-800'>OUR EXPERTS</p>
                <div className='border mt-2 w-32 border-gray-800'></div>
            </div>

            <div className='flex flex-row mx-12 mt-8'>
                <div className='mr-6'>
                    <img src={ourTeam4} className='w-80'/>
                    <p className='text-center mt-2 font-semibold'>Manager/CEO</p>
                </div>
                <div className='mr-6'>
                    <img src={ourTeam1}  className='w-80'/>
                    <p className='text-center mt-2 font-semibold'>Product Designer</p>
                </div>
                <div className='mr-6'>
                    <img src={ourTeam2}  className='w-80'/>
                    <p className='text-center mt-2 font-semibold'>Lead Developer</p>
                </div>
                <div>
                    <img src={ourTeam3}  className='w-80'/>
                    <p className='text-center mt-2 font-semibold'>Marketing Manager</p>
                </div>
            </div>

            <div className='flex items-center justify-center mt-5 flex-col'>
               <a href='' className='flex text-gray-600 font-bold mt-5 mb-1'>
               VIEW ALL
               </a>
               <div className='w-20 border-b-4 border-b-gray-800'></div>
            </div>
        </div>
    </div>
  )
}

export default MeetOurTeam