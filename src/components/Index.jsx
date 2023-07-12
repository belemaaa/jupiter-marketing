import React, {useState} from 'react'
import NavBar from './NavBar'
import banner1 from '../assets/banner-images/banner1.jpg'
import banner3 from '../assets/banner-images/banner3.jpg'
import banner5 from '../assets/banner-images/banner5.jpg'
import recentProject1 from '../assets/recent-project1.jpg'
import recentProject2 from '../assets/recent-image3.jpg'
import recentProject3 from '../assets/recent-image4.jpg'
import creativeProject1 from '../assets/projects/creativeProject1.jpg'
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
import aboutUsImage from '../assets/aboutUsImage.jpg'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowBack} from 'react-icons/io'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Footer from './Footer'



const Index = () => {

  const slides = [
    banner5,
    banner3,
    banner1,
  ]
  
  const [index, setIndex] = useState(0)
  const nextImage = () =>{
    setIndex((prevIndex) =>
    (prevIndex + 1) % slides.length    
    )
  }

  const prevImage = () =>{
    setIndex((prevIndex) => {
      if (prevIndex === 0){
        return slides.length - 1
      }
      else{
        return prevIndex - 1
      }
    })
  }

  const slidesDots = () =>{
    setIndex((prevIndex) => {
      return (prevIndex + 1) % slides.length
    })
  }
  

  return (
    <div className='overflow-hidden'>
        <NavBar/>

        <div className='relative flex flex-col'>
          <div className=''>
            <img src={slides[index]} 
            className='w-screen h-[390px] md:h-[75vh] md:mt-0 transition-opacity duration-700 ease-in'/>

            <div className='relative inset-0 -top-64 flex items-center justify-between p-8'>
              <MdOutlineArrowBackIos size={40} 
              onClick={prevImage}
              className=' text-white text-opacity-50'/>

              <MdOutlineArrowForwardIos size={40} 
              onClick={nextImage}
              className=' text-white text-opacity-50'/>
            </div>

            <div className='absolute top-[350px] md:top-[450px] right-0 left-0'>
              <div className='flex items-center justify-center gap-4'>
                {slides.map((_, i) => (
                  <div onClick={slidesDots}
                  className={'transition-all w-6 h-1 bg-white bg-opacity-50 rounded-xl'}>       
                  </div>
                ))}

              </div>
            </div>
            
          </div>

                  {/* body */}
          <div className='bg-[#3c3c3c] -mt-28'>
            <div className=' flex flex-col md:flex-row items-center justify-center my-16 mx-10 md:my-0 md:mx-0'>
              <div className='flex flex-col md:my-16 md:w-[400px] bg-black text-white p-12'>
                <p className='text-3xl mb-2 font-bold'>Email Marketing</p>
                <div className='w-16 border-b-4 border-orange-700'></div>
                <p className='mt-4'>
                Risus commodo maecenas accumsan lacus vel facilisis. 
                Lorem ipsum dolor consectetur adipiscing elit.
                </p>
              </div>

              <div className='flex flex-col md:my-10 md:w-[400px] bg-[#E8432D] text-white p-12'>
                <p className='text-3xl mb-2 font-bold'>Market Analysis</p>
                <div className='w-16 border-b-4 border-white'></div>
                <p className='mt-4'>
                Risus commodo maecenas accumsan lacus vel facilisis. 
                Lorem ipsum dolor consectetur adipiscing elit.
                </p>
              </div>

              <div className='flex flex-col md"my-10 md:w-[400px] bg-black text-white p-12'>
                <p className='text-3xl mb-2 font-bold'>Keyword Research</p>
                <div className='w-16 border-b-4 border-orange-700'></div>
                <p className='mt-4'>
                Risus commodo maecenas accumsan lacus vel facilisis. 
                Lorem ipsum dolor consectetur adipiscing elit.
                </p>
              </div>
            </div>
            
          </div>

                  {/* about us */}
          <div className=''>
            <div className='flex mt-4 flex-col md:flex-row'>
              <div className='md:w-1/2 md:justify-start mx-3 md:ml-24 mt-16 md:mt-12'>
                <div>
                  <p className='text-2xl md:text-5xl pb-3 text-[#E5442A] 
                  font-extrabold md:font-bold'>
                    ABOUT US
                  </p>
                  <p className='text-black text-3xl mt-2 md:mt-0
                   md:text-3xl font-semibold'>
                    Leading The Way In Creative <br className='hidden md:flex'/> 
                    Digital <br className='md:hidden'/> Agency
                  </p>
                </div>

                <div className='border-2 mt-3 w-12 border-pink-300'></div>

                <div>
                  <p className='text-xl md:text-2xl pb-3 pt-2 md:pt-1'>Best Digital Agency In The World</p>
                  <p className='text-base md:text-sm max-w-xl md:text-justify' style={{ lineHeight: "1.5" }}>
                  We provide marketing services to startups and small businesses to looking for 
                  a partner of their digital media, design & development, lead generation and 
                  communications requirents. We work with you, not for you. Although we have a great resources.
                  </p>
                  <p className='text-base md:text-sm max-w-xl md:text-justify pt-4 pb-5 md:pb-8' style={{ lineHeight: "1.5" }}>
                  We are an experienced and talented team of passionate consultants who 
                  live and breathe search engine marketing. We are an experienced 
                  and talented team of passionate.
                  </p>
                </div>
                <div>
                  <Link to='/aboutUs' className='text-white bg-[#ff4800] px-2 py-3 
                  border-none hover:text-blue-700'>
                    Read More
                  </Link>
                </div>
                
              </div>

              <img src={aboutUsImage} className='md:w-1/2 mx-3 md:mx-8 mt-10'/>
            </div>
          </div>


                  {/* what we do */}
          <div className='flex flex-col mt-16 relative bg-[#3c3c3c]'>
            <div className='py-16 mx-12'>
              <div className='flex flex-col'>
                <p className='text-[#E5442A] text-3xl md:text-5xl font-bold md:pl-10'>
                  WHAT WE DO
                </p>
                <p className='text-white font-semibold text-3xl md:pl-10 pt-7'>
                  Our Services
                </p>
              </div>

              <div className='border-b-2 md:ml-10 mt-4 w-12 border-b-[#E5442A] border-opacity-50'></div>

              <div className='flex flex-col -mt-3'>
                <div className='flex flex-col md:flex-row md:mx-10 mt-10'>
                  <div className='bg-black bg-opacity-70 rounded-full md:mr-5 mb-6 md:mb-0'>
                    <Link to='' 
                    className='flex flex-row text-xl text-[#d9d6d6] pl-6 py-7 w-96 hover:text-blue-800
                    font-semibold duration-500'>
                      Digital Branding
                      <IoIosArrowForward className='mt-1 ml-20'/>
                    </Link>
                  </div> 

                  <div className='bg-black bg-opacity-70 rounded-full md:mr-5 mb-6 md:mb-0'>
                    <Link to='' 
                    className='flex flex-row text-xl text-[#d9d6d6] pl-6 py-7 w-96 hover:text-blue-800
                    font-semibold duration-500'>
                      Creative Solution
                      <IoIosArrowForward className='mt-1 ml-20'/>
                    </Link>
                  </div> 

                  <div className='bg-black bg-opacity-70 rounded-full mb-4 md:mb-0'>
                    <Link to='' 
                    className='flex flex-row text-xl text-[#d9d6d6] pl-6 py-7 w-96 hover:text-blue-800
                    font-semibold duration-500'>
                      Web Solution
                      <IoIosArrowForward className='mt-1 ml-20'/>
                    </Link>
                  </div>                   
                </div>

                <div className='flex flex-col md:flex-row md:mx-10 mt-10'>
                  <div className='bg-black bg-opacity-70 rounded-full md:mr-5 mb-6 md:mb-0'>
                    <Link to='' 
                    className='flex flex-row text-xl text-[#d9d6d6] pl-6 py-7 w-96 hover:text-blue-800
                    font-semibold duration-500'>
                      Marketing
                      <IoIosArrowForward className='mt-1 ml-20'/>
                    </Link>
                  </div> 

                  <div className='bg-black bg-opacity-70 rounded-full md:mr-5 mb-6 md:mb-0'>
                    <Link to='' 
                    className='flex flex-row text-xl text-[#d9d6d6] pl-6 py-7 w-96 hover:text-blue-800
                    font-semibold duration-500'>
                      Paid Media
                      <IoIosArrowForward className='mt-1 ml-20'/>
                    </Link>
                  </div> 

                  <div className='bg-black bg-opacity-70 rounded-full mb-4 md:mb-0'>
                    <Link to='' 
                    className='flex flex-row text-xl text-[#d9d6d6] pl-6 py-7 w-96 hover:text-blue-800
                    font-semibold duration-500'>
                      Data Science
                      <IoIosArrowForward className='mt-1 ml-20'/>
                    </Link>
                  </div>                   
                </div>

                <div className='flex flex-col md:flex-row md:mx-10 mt-10'>
                  <div className='bg-black bg-opacity-70 rounded-full md:mr-5 mb-6 md:mb-0'>
                    <Link to='' 
                    className='flex flex-row text-xl text-[#d9d6d6] pl-6 py-7 w-96 hover:text-blue-800
                    font-semibold duration-500'>
                      Management
                      <IoIosArrowForward className='mt-1 ml-20'/>
                    </Link>
                  </div> 

                  <div className='bg-black bg-opacity-70 rounded-full md:mr-5 mb-6 md:mb-0'>
                    <Link to='' 
                    className='flex flex-row text-xl text-[#d9d6d6] pl-6 py-7 w-96 hover:text-blue-800
                    font-semibold duration-500'>
                      Social Media
                      <IoIosArrowForward className='mt-1 ml-20'/>
                    </Link>
                  </div> 

                  <div className='bg-black bg-opacity-70 rounded-full md:mb-0'>
                    <Link to='' 
                    className='flex flex-row text-xl text-[#d9d6d6] pl-6 py-7 w-96 hover:text-blue-800
                    font-semibold duration-500'>
                      UI & UX Design
                      <IoIosArrowForward className='mt-1 ml-20'/>
                    </Link>
                  </div>                   
                </div>
              </div>
            </div>   
          </div>

                  {/* our completed projects */}
          <div className='mx-10'>
            <div className='flex flex-col'>
              <p className='text-[#E5442A] text-3xl md:text-4xl font-semibold mb-2 mt-28 ml-3'>
                OUR COMPLETED PROJECTS
              </p>

              <div className='mt-4'>
                <p className='text-black text-3xl font-semibold ml-3'>
                  Recent Projects
                </p>
              </div>
            
              <div className='flex flex-col md:flex-row ml-3 mb-4 md:-mt-4'>
                <div className='border-b-4 mr-72 ml-8 mt-3 md:mt-0 w-12 border-pink-200'></div>
                <div className='md:ml-96 mt-16 md:mt-0'>
                  <Link to='/projects' 
                  className='md:ml-72 inline-block font-semibold
                  text-[#d9d6d6] bg-[#E5442A] px-28 py-1 md:px-4 md:py-3 
                  border-none hover:text-white'>
                    All Projects
                  </Link>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='m-3'>
                  <img src={recentProject1} className='w-96 md:w-80'/>
                  <p className='font-semibold text-lg mt-2'>
                    Architecture
                  </p>
                </div>

                <div className='m-3'>
                  <img src={recentProject2} className='w-96 md:w-80'/>
                  <p className='font-semibold text-lg mt-2'>
                    Development
                  </p>
                </div>

                <div className='m-3'>
                  <img src={recentProject1} className='w-96 md:w-80'/>
                  <p className='font-semibold text-lg mt-2'>
                    Architecture
                  </p>
                </div>

                <div className='m-3'>
                  <img src={recentProject3} className='w-96 md:w-80'/>
                  <p className='font-semibold text-lg mt-2'>
                    Development
                  </p>
                </div>
            </div>
          </div>

          <div className='border-b-2 border-b-[#d9dde1] my-6 mx-2'></div>


                  {/* meet our team */}
          <div className='mx-10'>
            <div className='flex flex-col'>
              <p className='text-[#E5442A] text-3xl md:text-4xl font-semibold mb-2 mt-12 ml-3'>
                MEET OUR TEAM
              </p>

              <div className='mt-4'>
                <p className='text-black text-3xl font-semibold ml-3'>
                  Our Experts
                </p>
              </div>
            
              <div className='flex flex-col md:flex-row ml-3 mb-4 md:-mt-4'>
                <div className='border-b-4 mr-72 ml-8 mt-3 md:mt-0 w-12 border-pink-200'></div>
                <div className='md:ml-96 mt-16 md:mt-0'>
                  <Link to='/team' 
                  className='md:ml-72 inline-block font-semibold
                  text-[#d9d6d6] bg-[#E5442A] px-[120px] py-1 md:px-5 md:py-3 
                  border-none hover:text-white'>
                    View All
                  </Link>
                </div>
              </div>
            </div>

            <div className='mt-8 bg-[#F9F9F9]'>
              <div className='flex flex-col md:flex-row items-center justify-center px-10 py-10'>
                <div className='md:mr-9 mb-16 md:mb-0'>
                    <img src={ourTeam4} className='w-96 md:w-60'/>
                    <p className='text-sm mt-3'>Architecture</p>
                    <p className='text-sm mt-2 font-bold'>Product Designer</p>
                  </div>
                  <div className='text-xl md:mx-9 mb-16 md:mb-0'>
                      <img src={ourTeam1}  className='w-96 md:w-60'/>
                      <p className='text-sm mt-3'>Development</p>
                      <p className='text-sm mt-2 font-bold'>Product Designer</p>
                  </div>
                  <div className='text-xl md:mx-9 mb-16 md:mb-0'>
                      <img src={ourTeam2}  className='w-96 md:w-60'/>
                      <p className='text-sm mt-3'>Development</p>
                      <p className='text-sm mt-2 font-bold'>Product Designer</p>
                  </div>
                  <div className='md:ml-9'>
                      <img src={ourTeam6} className='w-96 md:w-60'/>
                      <p className='text-sm mt-3'>Development</p>
                      <p className='text-sm mt-2 font-bold'>Product Designer</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Index