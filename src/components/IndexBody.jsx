import React from 'react'
import banner1 from '../assets/banner-images/banner1.jpg'
import banner2 from '../assets/banner-images/banner2.jpg'
import banner3 from '../assets/banner-images/banner3.jpg'
import banner4 from '../assets/banner-images/banner4.jpg'
import banner5 from '../assets/banner-images/banner5.jpg'

const IndexBody = () => {
  return (
    <div className='pt-3 flex items-center'>
        <div className='flex flec-row mt-20'>
            <div className='bg-orange-300 px-4 py-6 rounded-2xl mx-6 hover:scale-110 duration-500'>
                <p className='text-3xl font-semibold'>Email Marketing</p>
                <p className='max-w-sm pt-3 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in laboriosam placeat, 
                    nobis enim necessitatibus temporibus et eligendi nisi
                </p>
            </div>

            <div className='mx-6 bg-orange-300 px-4 py-6 rounded-2xl hover:scale-110 duration-500'>
                <p className='text-3xl font-semibold'>Market Analysis</p>
                <p className='max-w-sm pt-3 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in laboriosam placeat, 
                    nobis enim necessitatibus temporibus et eligendi nisi
                </p>
            </div>

            <div className='mx-6 bg-orange-300 px-4 py-6 rounded-2xl hover:scale-110 duration-500'>
                <p className='text-3xl font-semibold'>Keyword Research</p>
                <p className='max-w-sm pt-3 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in laboriosam placeat, 
                    nobis enim necessitatibus temporibus et eligendi nisi
                </p>
            </div>
        </div> 
    </div>
  )
}

export default IndexBody