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
    <div>
        <ContactNav/>
        <NavBar/>
        <div className='flex flex-col py-16'>
            <div className=''>
                <p className=' text-gray-800 text-3xl md:text-5xl font-bold mb-2 ml-12 mt-6'>
                    OUR TEAM
                </p>
                <div className='border-b border-b-black ml-12 mr-24'></div>
            </div>

            <div className='mx-12 mt-6'>
                <p className='text-justify text-gray-700'>
                    Our team is a dynamic and highly motivated group of individuals working together towards a common goal. 
                    We are a diverse blend of talents, each bringing our unique skills and experiences to the table. 
                    Collaboration and open communication are at the heart of our team's success, 
                    as we believe that the best ideas emerge when everyone's voice is heard. 
                    We embrace challenges with enthusiasm and a solution-oriented mindset, 
                    consistently pushing the boundaries of what is possible. Our commitment 
                    to excellence and continuous improvement drives us to deliver exceptional results. 
                    Together, we form a cohesive unit that thrives on mutual respect, trust, and support. 
                    With a shared vision and unwavering dedication, we tackle projects head-on, overcoming 
                    obstacles and achieving remarkable outcomes. Our team is not just a group of individuals, 
                    but a tight-knit community that fosters growth, innovation, and success.
                </p>
            </div>

            <div className='flex flex-col items-center justify-center mt-8'>
                <p className='text-3xl font-bold text-gray-800'>OUR EXPERTS</p>
                <div className='border-2 mt-3 w-12 border-gray-500 '></div>
            </div>

            <div className='mx-12 mt-6 flex flex-col'>
                <div className='flex flex-row'>
                    <div className='mr-4'>
                        <img src={ourTeam4}/>
                        <p className='text-center mt-4 font-bold text-black text-lg'>MANAGER/CEO</p>
                    </div>
                    <div className='mx-4'>
                        <img src={ourTeam1}/>
                        <p className='text-center mt-4 font-bold text-black text-lg'>PRODUCT DESIGNER</p>
                    </div>
                    <div className='mx-4'>
                        <img src={ourTeam2}/>
                        <p className='text-center mt-4 font-bold text-black text-lg'>LEAD DEVELOPER</p>
                    </div>
                    <div className='ml-4'>
                        <img src={ourTeam3} className=''/>
                        <p className='text-center mt-4 font-bold text-black text-lg'>MARKETING MANAGER</p>
                    </div>
                </div>

                <div className='flex flex-row my-12'>
                    <div className='mr-4'>
                        <img src={ourTeam5} className='w-96'/>
                        <p className='text-center mt-4 font-bold text-black text-lg'>DATA ANALYST</p>
                    </div>
                    <div className='mx-4'>
                        <img src={ourTeam6} className='w-96'/>
                        <p className='text-center mt-4 font-bold text-black text-lg'>DIGITAL MARKETER</p>
                    </div>
                    <div className='mx-4'>
                        <img src={ourTeam7} className='w-96'/>
                        <p className='text-center mt-4 font-bold text-black text-lg'>CONSULTANT</p>
                    </div>
                    <div className='ml-4'>
                        <img src={ourTeam9} className='w-96 h-48'/>
                        <p className='text-center mt-4 font-bold text-black text-lg'>SOFTWARE ENGINEER</p>
                    </div>
                </div>

                <div className='flex flex-row mb-12 items-center justify-center'>
                    <div className='mx-4'>
                        <img src={ourTeam11} className='w-96 h-60'/>
                        <p className='text-center mt-4 font-bold text-black text-lg'>FRONTEND DEVELOPER</p>
                    </div>
                    <div className='mx-4'>
                        <img src={ourTeam12} className='w-96 h-60'/>
                        <p className='text-center mt-4 font-bold text-black text-lg'>DIRECTOR</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Team