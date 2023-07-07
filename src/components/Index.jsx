import React, {useState} from 'react'
import NavBar from './NavBar'
import banner1 from '../assets/banner-images/banner1.jpg'
import banner2 from '../assets/banner-images/banner2.jpg'
import banner3 from '../assets/banner-images/banner3.jpg'
import banner4 from '../assets/banner-images/banner4.jpg'
import banner5 from '../assets/banner-images/banner5.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'


const Index = () => {

  const slides = [
    {
      image:{banner1}
    },
    {
      image:{banner2}
    },
    {
      image:{banner3}
    },
    {
      image:{banner4}
    },
    {
      image:{banner5}
    },
  ]
  
  const [currentSlide, setCurrentSlide] = useState(0)
  

  return (
    <div>
        <NavBar/>

        <div className='relative flex flex-col'>
          <div className='flex flex-row'>
            <AiOutlineArrowLeft/>
            <AiOutlineArrowRight/>

            {slides.map(({index, image}) => (
              <>
              </>
            ))}
            
          </div>
        </div>
        
    </div>
  )
}

export default Index