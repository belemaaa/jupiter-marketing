import React from 'react'
import ContactNav from './ContactNav'
import NavBar from './NavBar'
import Footer from './Footer'
import ourTeam1 from '../assets/team/ourTeam1.jpg'
import ourTeam2 from '../assets/team/ourTeam2.jpg'
import ourTeam3 from '../assets/team/ourTeam3.jpg'
import ourTeam4 from '../assets/team/ourTeam4.jpg'
import ourTeam5 from '../assets/team/ourTeam5.jpg'
import ourTeam6 from '../assets/team/ourTeam6.jpg'
import ourTeam7 from '../assets/team/ourTeam7.jpg'
import ourTeam8 from '../assets/team/ourTeam8.jpg'
import ourTeam9 from '../assets/team/ourTeam9.jpg'
import ourTeam10 from '../assets/team/ourTeam10.jpg'
import ourTeam11 from '../assets/team/ourTeam11.jpg'
import ourTeam12 from '../assets/team/ourTeam12.jpg'
import ourTeam13 from '../assets/team/ourTeam13.jpg'


const Team = () => {
  return (
    <div className='flex flex-col'>
        <NavBar/>

        <div className='flex flex-col pt-6 pb-12'>
            <div className='mt-1 md:mt-4'>
                <p className='text-orange-600 text-5xl md:text-5xl font-bold m-3'>
                    OUR TEAM
                </p>
                <p className='text-black font-semibold text-3xl m-3'>
                    Our Experts
                </p>
            </div>

            <div className='flex flex-col md:flex-row items-center 
            justify-center mt-10 md:my-10'>
                <div className='md:ml-3 md:mr-8 w-96 md:w-96 mb-6 md:mb-0'>
                    <a href=''>
                        <img src={ourTeam4} className='shadow-xl'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Architecture
                        </p>
                        <p className='text-sm text-center mt-2 font-semibold'>Data Analyst</p>
                    </a>

                </div>
                <div className='md:mx-8 w-96 md:w-96 mb-6 md:mb-0'>
                    <a href=''>
                        <img src={ourTeam1} className='shadow-xl '/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Development
                        </p>
                        <p className='text-sm text-center mt-2 font-semibold'>Product Designer</p>
                    </a>
                </div>
                <div className='md:ml-8 md:mr-3 w-96 md:w-96 mb-6 md:mb-0'>
                    <a href=''>
                        <img src={ourTeam2} className='shadow-xl '/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Management
                        </p>
                        <p className='text-sm text-center mt-2 font-semibold'>CTO</p>
                    </a>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center 
            justify-center md:my-10'>
                <div className='md:ml-3 md:mr-8 w-96 md:w-96 mb-6 md:mb-6'>
                    <a href=''>
                        <img src={ourTeam3} className='shadow-xl'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Architecture
                        </p>
                        <p className='text-sm text-center mt-2 font-semibold'>Data Analyst</p>
                    </a>
                </div>
                <div className='md:mx-8 w-96 md:w-96 mb-6 md:mb-6'>
                    <a href=''>
                        <img src={ourTeam5} className='shadow-xl'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Development
                        </p>
                        <p className='text-sm text-center mt-2 font-semibold'>Product Designer</p>
                    </a>
                </div>
                <div className='md:ml-8 md:mr-3 w-96 md:w-96 mb-6 md:mb-6'>
                    <a href=''>
                        <img src={ourTeam6} className='shadow-xl'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Development
                        </p>
                        <p className='text-sm text-center mt-2 font-semibold'>Product Designer</p>
                    </a>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='md:ml-3 md:mr-8 w-96 md:w-96 mb-6 md:mb-6'>
                    <a href=''>
                        <img src={ourTeam7} className='shadow-xl'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Management
                        </p>
                        <p className='text-sm text-center mt-2 font-semibold'>CEO</p>
                    </a>
                </div>
                <div className='md:mx-8 w-96 md:w-96 mb-6 md:mb-6'>
                    <a href=''>
                        <img src={ourTeam11} className='shadow-xl'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Development
                        </p>
                        <p className='text-sm text-center mt-2 font-semibold'>Software Engineer</p>
                    </a>
                </div>
                <div className='md:ml-8 md:mr-3 w-96 md:w-96 md:mb-6'>
                    <a href=''>
                        <img src={ourTeam12} className='shadow-xl'/>
                        <p className='text-center text-black font-bold text-xl mt-5'>
                            Development
                        </p>
                        <p className='text-sm text-center mt-2 font-semibold'>Digital Marketer</p>
                    </a>
                </div>
            </div>
        </div>

        <Footer/>
        {/* comment */}
    </div>
  )
}

export default Team