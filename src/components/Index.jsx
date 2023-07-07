import React, {useState} from 'react'
import NavBar from './NavBar'
import banner1 from '../assets/banner-images/banner1.jpg'
import banner3 from '../assets/banner-images/banner3.jpg'
import banner5 from '../assets/banner-images/banner5.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'


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
    <div>
        <NavBar/>

        <div className='relative flex flex-col'>
          <div className='flex flex-row'>
            <AiOutlineArrowLeft onClick={prevImage}/>

            <img src={slides[index]} className='w-44'/>

            <AiOutlineArrowRight onClick={nextImage}/>

            {/* {slides.map(({index, image}) => (
              <>
              </>
            ))} */}
            
          </div>
        </div>
        
    </div>
  )
}

export default Index