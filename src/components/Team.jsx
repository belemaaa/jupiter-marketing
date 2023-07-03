import React from 'react'
import ContactNav from './ContactNav'
import NavBar from './NavBar'
import Footer from './Footer'

const Team = () => {
  return (
    <div>
        <ContactNav/>
        <NavBar/>
        <div className='flex flex-col my-16'>
            <div className=''>
                <p className=' text-gray-800 text-3xl md:text-5xl font-bold mb-2 ml-6 mt-6'>
                    OUR TEAM
                </p>
                <div className='border-b border-b-black ml-6 mr-24'></div>
            </div>

            <div className='mx-6 mt-6'>
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

            <div className='flex flex-col items-center justify-center mt-16'>
                <p className='text-3xl font-bold text-gray-800'>Our Experts</p>
                <div className='border-2 mt-3 w-12 border-pink-300 '></div>
            </div>

            <div>
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Team