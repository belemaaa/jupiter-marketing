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
import aboutUsImage from '../assets/aboutUsImage.jpg'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowBack} from 'react-icons/io'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'
import {RxDotFilled} from 'react-icons/rx'
import {LiaCopyright} from 'react-icons/lia'
import { Link } from 'react-router-dom'



const Index = () => {

  const slides = [
    banner3,
    banner1,
    banner5
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
            className='w-screen h-96 md:h-[75vh] mt-2 md:mt-0 transition-transform ease-out duration-700'/>

            <div className='relative inset-0 -top-60 flex items-center justify-between p-4'>
              <IoIosArrowBack size={40} 
              onClick={prevImage}
              className='bg-white bg-opacity-20 hover:bg-white rounded-full px-2 py-2'/>

              <IoIosArrowForward size={40} 
              onClick={nextImage}
              className='bg-white bg-opacity-20 hover:bg-white rounded-full px-2 py-2'/>
            </div>

            <div className='absolute md:bottom-96 top-[350px] md:top-[400px] right-0 left-0'>
              <div className='flex items-center justify-center gap-2'>
                {slides.map((_, i) => (
                  <div onClick={slidesDots}
                  className={'transition-all w-3 h-3 bg-white rounded-full'}>       
                  </div>
                ))}

              </div>
            </div>
            
          </div>

          <div className='flex flex-col md:flex-row -mt-10 md:-mt-10'>
            <div className='p-3'>
              <p className='text-3xl font-semibold'>Email Marketing</p>
              <p className='max-w-lg'>
                Risus commodo maecenas accumsan lacus vel facilisis. 
                Lorem ipsum dolor consectetur adipiscing elit.
              </p>
            </div>

            <div className='p-3'>
              <p className='text-3xl font-semibold'>Market Analysis</p>
              <p className='max-w-lg'>
                Risus commodo maecenas accumsan lacus vel facilisis. 
                Lorem ipsum dolor consectetur adipiscing elit.
              </p>
            </div>

            <div className='p-3'>
              <p className='text-3xl font-semibold'>Keyword Research</p>
              <p className='max-w-lg'>
                Risus commodo maecenas accumsan lacus vel facilisis. 
                Lorem ipsum dolor consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className=''>
            <div className='flex mt-4 flex-col md:flex-row'>
              <div className='md:w-1/2 md:justify-start mx-3 md:ml-24 mt-10 md:mt-12'>
                <div>
                  <p className='text-2xl md:text-5xl pb-3 text-orange-700 
                  font-extrabold md:font-bold'>
                    ABOUT US
                  </p>
                  <p className='text-black text-4xl mt-2 md:mt-0
                   md:text-3xl font-semibold'>
                    Leading The Way In Creative <br className='hidden md:flex'/> 
                    Digital <br className='md:hidden'/> Agency
                  </p>
                </div>

                <div className='border-2 mt-3 w-12 border-pink-300'></div>

                <div>
                  <p className='text-xl md:text-2xl pb-3 pt-2 md:pt-1'>Best Digital Agency In The World</p>
                  <p className='text-base md:text-sm max-w-xl md:text-justify'>
                  We provide marketing services to startups and small businesses to looking 
                  for a partner of their digital media, design & development, lead generation 
                  and communications requirents. We work with you, not for you. 
                  We have great resources that can help scale your business.
                  </p>
                  <p className='text-base md:text-sm max-w-xl md:text-justify pt-4 pb-5 md:pb-8'>
                  We are an experienced and talented team of passionate consultants who live
                  and breathe search engine marketing. We are an experienced and talented team of consultants
                  who are here to bear the burdens of your business.
                  </p>
                </div>
                <Link to='/aboutUs' className='text-blue-600 underline'>Read More</Link>
              </div>

              <img src={aboutUsImage} className='md:w-1/2 mx-3 md:mx-8 mt-10'/>
            </div>
          </div>

          <div className='flex flex-col mt-16 relative'>
            <div className='flex items-start justify-start m-3'>
              <p className='text-orange-700 text-3xl md:text-4xl font-extrabold mb-2'>
                WHAT WE DO
              </p>
            </div>

            <div className='border-2 m-4 w-12 border-pink-300'></div>

            <div className='flex flex-col -mt-3'>
              <div className='flex flex-col md:flex-row'>
                <Link to='' 
                className='flex flex-row text-xl text-blue-600 ml-3 md:m-4 underline hover:text-blue-800
                font-semibold'>
                  Digital Branding
                  <IoIosArrowForward className='mt-1 ml-1'/>
                </Link> 

                <Link to='' 
                className='flex flex-row text-xl text-blue-600 ml-3 md:m-4 underline hover:text-blue-800 
                md:ml-[200px] font-semibold'>
                  Creative Solution
                  <IoIosArrowForward className='mt-1 ml-1'/>
                </Link> 

                <Link to='' 
                className='flex flex-row text-xl text-blue-600 ml-3 md:m-4 underline hover:text-blue-800 
                md:ml-[202px] font-semibold'>
                  Web Solution
                  <IoIosArrowForward className='mt-1 ml-1'/>
                </Link>                   
              </div>

              <div className='flex flex-col md:flex-row mt-6 md:mt-0'>
                <Link to='' 
                className='flex flex-row text-xl text-blue-600 ml-3 md:m-4 underline hover:text-blue-800 font-semibold'>
                  Marketing
                  <IoIosArrowForward className='mt-1 ml-1'/>
                </Link> 

                <Link to='' 
                className='flex flex-row text-xl text-blue-600 ml-3 md:m-4 underline hover:text-blue-800 
                md:ml-[260px] font-semibold'>
                  Paid Media
                  <IoIosArrowForward className='mt-1 ml-1'/>
                </Link> 

                <Link to='' 
                className='flex flex-row text-xl text-blue-600 ml-3 md:m-4 underline hover:text-blue-800 
                md:ml-[260px] font-semibold'>
                  Data Science
                  <IoIosArrowForward className='mt-1 ml-1'/>
                </Link>                   
              </div>

              <div className='flex flex-col md:flex-row  mt-6 md:mt-0'>
                <Link to='' 
                className='flex flex-row text-xl text-blue-600 ml-3 md:m-4 underline hover:text-blue-800 font-semibold'>
                  Management
                  <IoIosArrowForward className='mt-1 ml-1'/>
                </Link> 

                <Link to='' 
                className='flex flex-row text-xl text-blue-600 ml-3 md:m-4 underline 
                hover:text-blue-800 md:ml-[225px] font-semibold'>
                  Social Media
                  <IoIosArrowForward className='mt-1 ml-1'/>
                </Link> 

                <Link to='' 
                className='flex flex-row text-xl text-blue-600 ml-3 md:m-4 underline 
                hover:text-blue-800 md:ml-[245px] font-semibold'>
                  UI & UX Design
                  <IoIosArrowForward className='mt-1 ml-1'/>
                </Link>                   
              </div>
            </div>
          </div>

          <div>
            <div className='flex flex-col'>
              <p className='text-orange-700 text-2xl md:text-4xl font-extrabold mb-2 mt-10
              ml-3'>
                OUR COMPLETED PROJECTS
              </p>

              <div className='mt-3'>
                <p className='text-black text-4xl font-bold ml-3'>
                  Recent Projects
                </p>
              </div>
            
            <div className='flex flex-col md:flex-row '>
              <div className='border-b-4 mr-80 m-3 w-12 border-pink-200'></div>
              <div className='md:ml-96 m-3'>
                  <Link to='' 
                  className='md:ml-96 underline px-2 inline-block
                  text-blue-600 hover:text-blue-800 border border-black
                  bg-black bg-opacity-5 py-1 font-semibold'>
                    All Projects
                  </Link>
              </div>
            </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='m-3'>
                  <img src={recentProject1} className='w-96 md:w-80 shadow-lg'/>
                  <p className='text-center font-semibold text-2xl mt-2'>
                    Architecture
                  </p>
                </div>

                <div className='m-3'>
                  <img src={recentProject2} className='w-96 md:w-80 shadow-lg'/>
                  <p className='text-center font-semibold text-2xl mt-2'>
                    Development
                  </p>
                </div>

                <div className='m-3'>
                  <img src={recentProject3} className='w-96 md:w-80 shadow-lg'/>
                  <p className='text-center font-semibold text-2xl mt-2'>
                    Architecture
                  </p>
                </div>

                <div className='m-3'>
                  <img src={creativeProject1} className='h-52 w-96 md:w-80 shadow-xl'/>
                  <p className='text-center font-semibold text-2xl mt-2'>
                    Development
                  </p>
                </div>
            </div>
          </div>

          <div>
            <div className='pt-12 pb-6'>
              <div>
                  <p className='text-orange-700 text-3xl md:text-5xl font-semibold m-3'>
                      MEET OUR TEAM
                  </p>
              </div>
              
              <div className='flex flex-col'>
                  <p className='text-3xl font-bold mt-2 ml-3 md:m-3'>Our Experts</p>
              </div>

              <div className='flex flex-col md:flex-row m-3'>
                <div className='border-b-4 mr-80 w-12 border-pink-200'></div>
                <div className='md:ml-96 mt-4 md:mt-0'>
                    <Link to='' 
                    className='md:ml-96 underline px-2 inline-block
                    text-blue-600 hover:text-blue-800 border border-black
                    bg-black bg-opacity-5 py-1 font-semibold'>
                      View All
                    </Link>
                </div>
              </div>

              <div className='flex flex-col md:flex-row md:mx-3 mt-8 items-center justify-center'>
                  <div className='md:mr-6 mb-4 md:mb-0'>
                      <img src={ourTeam4} className='w-96 md:w-80'/>
                      <p className='text-xl text-center mt-2 font-semibold'>Architecture</p>
                      <p className='text-sm text-center mt-2 font-semibold'>Product Designer</p>
                  </div>
                  <div className='text-xl md:mr-6 mb-4 md:mb-0'>
                      <img src={ourTeam1}  className='w-96 md:w-80'/>
                      <p className='text-center mt-2 font-semibold'>Development</p>
                      <p className='text-sm text-center mt-2 font-semibold'>Product Designer</p>
                  </div>
                  <div className='text-xl md:mr-6 mb-4 md:mb-0'>
                      <img src={ourTeam2}  className='w-96 md:w-80'/>
                      <p className='text-center mt-2 font-semibold'>Development</p>
                      <p className='text-sm text-center mt-2 font-semibold'>Product Designer</p>
                  </div>
                  <div>
                      <img src={ourTeam3}  className='w-96 md:w-80'/>
                      <p className='text-xl text-center mt-2 font-semibold'>Development</p>
                      <p className='text-sm text-center mt-2 font-semibold'>Product Designer</p>
                  </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row ml-3 md:mx-24 text-black pt-12 pb-8'>
              <div className='flex flex-col mr-8'>
                <p className='text-2xl pb-2'>Quick Links</p>
                <div className='border border-gray-300 w-60'></div>
                <ul className='mt-4 text-blue-500'>
                    <li className=''>
                        <Link to='/' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Home
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/aboutUs' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            About Us
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/projects' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Project
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/team' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Team
                        </Link>
                    </li>
                    <li className='pb-2'>
                        <Link to='/contact' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Contact Us
                        </Link>
                    </li>
                </ul>
              </div>

              <div className='flex flex-col md:mx-8 my-6 md:my-0'>
                <p className='text-2xl pb-2'>Our Services</p>
                <div className='border border-gray-300 w-60'></div>
                <ul className='mt-4 text-blue-500'>
                    <li className=''>
                        <Link to='' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Digital Branding
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Creative Solution
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Web Solution
                        </Link>
                    </li>
                </ul>
              </div>

              <div className='flex flex-col md:mx-8 mb-6 md:mb-0'>
                <p className='text-2xl pb-2'>Social Links</p>
                <div className='border border-gray-300 w-60'></div>
                <ul className='mt-4 text-blue-500'>
                  <li>
                      <a href="#" className='flex flex-row underline'>
                          <RxDotFilled size={20} className='text-black mr-1 mt-0.5'/>
                          <FaFacebookF size={15} className='text-blue-600 mr-1 mt-1'/>
                          Facebook 
                      </a>
                  </li>
                  <li>
                      <a href="#" className='flex flex-row underline'>
                          <RxDotFilled size={20} className='text-black mr-1 mt-0.5'/>
                          <IoLogoTwitter size={15} className='text-blue-600 mr-1 mt-1'/>
                          Twitter
                      </a>
                  </li>
                  <li>
                      <a href='#' className='flex flex-row underline'>
                          <RxDotFilled size={20} className='text-black mr-1 mt-0.5'/>
                          <FaLinkedinIn size={15} className='text-blue-600 mr-1 mt-1'/>
                          LinkedIn
                      </a>
                  </li>
                </ul>
              </div>

              <div className='flex flex-col md:mx-8'>
                <p className='text-2xl pb-2'>Location</p>
                <div className='border border-gray-300 w-60'></div>
                <ul className='mt-4 text-black'>
                  <li className='flex flex-row'>
                    <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                    352/71 Second Street
                  </li>
                  <li className='flex flex-row'>
                    <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                    King Street
                  </li>
                  <li className='flex flex-row'>
                    <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                    Kingston
                  </li>
                  <li className='flex flex-row'>
                    <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                    United Kingdom
                  </li>
                </ul>
              </div>
            </div>

            <div className='border-b border-gray-300 md:mx-24'></div>
            <div className='flex flex-col md:flex-row'>
              <div className='flex items-start justify-start ml-3 md:ml-24'>
                  <p className='text-black flex flex-row py-3 text-sm'>
                      <LiaCopyright size={15} className='text-black mr-1 mt-0.5'/>
                      Jupiter Marketing Services. All Rights Reserved, 2023
                  </p>
              </div>

              <div className='md:flex ml-3 md:ml-60 my-1'>
                  <Link to='/contact' className=' text-blue-500 
                   hover:text-blue-700 underline duration-500'>
                      Sitemap
                  </Link>
              </div>
            </div>    
          </div>

          
          
        </div>
        
    </div>
  )
}

export default Index