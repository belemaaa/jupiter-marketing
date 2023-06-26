import React from 'react'

const WhatWeDo = () => {
  return (
    <div className='flex flex-col mt-16'>
        <div className='flex items-center justify-center'>
            <p className='text-orange-700 text-4xl font-bold mb-4'>WHAT WE DO</p>
        </div>

        <div className='flex items-center justify-center'>
            <div className='flex flex-row py-12'>
                <div className='bg-orange-400 px-4 py-10 mx-8 hover:scale-110 duration-500'>
                    <p className='text-3xl font-semibold'>Email Marketing</p>
                </div>

                <div className='mx-8 bg-orange-400 px-4 py-10 hover:scale-110 duration-500'>
                    <p className='text-3xl font-semibold'>Market Analysis</p>
                </div>

                <div className='mx-8 bg-orange-400 px-4 py-10 hover:scale-110 duration-500'>
                    <p className='text-3xl font-semibold'>Keyword Research</p>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default WhatWeDo