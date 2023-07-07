import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowBack} from 'react-icons/io'

const Carousel = ({ children: slides }) => {
  return (
    <div className='overflow-hidden relative'>
        <div className='flex c'>
            {slides}
        </div>
        <div className='absolute inset-0'>
            <button>
                <IoIosArrowBack size={40}/>
            </button>
            <button>
                <IoIosArrowForward size={40}/>
            </button>
        </div>
    </div>
  )
}

export default Carousel