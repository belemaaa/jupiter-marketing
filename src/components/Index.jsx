import React, {useState} from 'react'
import NavBar from './NavBar'
import banner1 from '../assets/banner-images/banner1.jpg'
import banner3 from '../assets/banner-images/banner3.jpg'
import banner5 from '../assets/banner-images/banner5.jpg'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowBack} from 'react-icons/io'


const Index = () => {

  const slides = [
    banner1,
    banner3,
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
  

  return (
    <div className='overflow-hidden'>
        <NavBar/>

        <div className='relative flex flex-col'>
          <div className=''>
            <img src={slides[index]} 
            className='w-screen h-[70vh] transition-transform ease-out duration-700'/>

            <div className='absolute inset-0 flex items-center justify-between p-4'>
              <IoIosArrowBack 
              size={40} 
              onClick={prevImage}
              className='bg-white bg-opacity-20 hover:bg-white rounded-full px-2 py-2'/>
              <IoIosArrowForward 
              size={40} 
              onClick={nextImage}
              className='bg-white bg-opacity-20 hover:bg-white rounded-full px-2 py-2'/>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
              <div className='flex items-center justify-center gap-2'>
                {slides.map((_, i) => (
                  <div
                  className={'transition-all w-3 h-3 bg-white rounded-full'}>       
                  </div>
                ))}

              </div>
            </div>
            
          </div>

          <div className='flex flex-row mt-6'>
            <div className='p-4'>
              <p className='text-3xl font-semibold'>Email Marketing</p>
              <p className='max-w-sm'>
                Risus commodo maecenas accumsan lacus vel facilisis. 
                Lorem ipsum dolor consectetur adipiscing elit.
              </p>
            </div>

            <div className='p-4'>
              <p className='text-3xl font-semibold'>Email Marketing</p>
              <p className='max-w-sm'>
                Risus commodo maecenas accumsan lacus vel facilisis. 
                Lorem ipsum dolor consectetur adipiscing elit.
              </p>
            </div>

            <div className='p-4'>
              <p className='text-3xl font-semibold'>Email Marketing</p>
              <p className='max-w-sm'>
                Risus commodo maecenas accumsan lacus vel facilisis. 
                Lorem ipsum dolor consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Index