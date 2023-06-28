import React from 'react'

const CompletedProjects = () => {
  return (
    <div className='flex flex-col mt-16 relative bg-black bg-opacity-10'>
      <div className='py-16'>
        <div className='flex items-center justify-center flex-col mb-4'>
              <p className='text-orange-700 text-4xl font-bold mb-2'>
                OUR COMPLETED PROJECTS
              </p>
              <p className='text-gray-800 text-3xl font-bold'>Recent Projects</p>
              <div className='border-2 mt-3 w-12 border-pink-300 '></div>
        </div>
      </div>

    </div>
  )
}

export default CompletedProjects