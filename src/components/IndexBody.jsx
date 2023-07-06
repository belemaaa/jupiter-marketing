import React from 'react'
import banner1 from '../assets/banner-images/banner1.jpg'
import banner2 from '../assets/banner-images/banner2.jpg'
import banner3 from '../assets/banner-images/banner3.jpg'
import banner4 from '../assets/banner-images/banner4.jpg'
import banner5 from '../assets/banner-images/banner5.jpg'

const IndexBody = () => {
  return (
    <div className='bg-black bg-opacity-10 w-screen overflow-hidden'>
        {/* <img src={banner5} className='w-full h-96 top-0'/> */}
        
        <div className='flex flex-col md:flex-row md:py-16 md:mx-8'>
            <div className='bg-gray-400 md:mb-0 md:rounded-none md:mx-6 px-4 md:px-6 py-10 
            md:hover:scale-110 duration-500 md:shadow-xl'>
                <p className='text-3xl font-semibold'>
                    Email Marketing
                </p>
                <p className='max-w-sm pt-3 text-sm text-gray-700'>
                    Supercharge your business with our top-notch email marketing services. 
                    Harness the power of engaging campaigns to drive conversions and captivate your audience effortlessly.
                </p>
            </div>

            <div className='md:mx-6 bg-black bg-opacity-10 md:mb-0 md:rounded-none px-4 md:px-6 py-10 
            md:hover:scale-110 duration-500 md:shadow-xl'>
                <p className='text-3xl font-semibold'>
                    Market Analysis
                </p>
                <p className='max-w-sm pt-3 text-sm text-gray-500'>
                    Unlock the potential of market analysis with our comprehensive 
                    email marketing services. Gain valuable insights, optimize your strategies, and stay ahead of the competition effortlessly.
                </p>
            </div>

            <div className='md:mx-6 bg-gray-400 md:rounded-none px-4 md:px-6 py-10 
            md:hover:scale-110 duration-500 md:shadow-xl'>
                <p className='text-3xl font-semibold'>
                    Keyword Research
                </p>
                <p className='max-w-sm pt-3 text-sm text-gray-700'>
                    Uncover hidden opportunities, dominate search rankings, 
                    and attract targeted traffic to skyrocket your business growth effortlessly.
                </p>
            </div>
        </div> 
    </div>
  )
}

export default IndexBody