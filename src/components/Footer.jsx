import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 flex flex-col'>
        <div className='flex flex-row mx-24 text-white py-12'>
            <div className='flex flex-col'>
                <p className='text-2xl pb-2'>Quick Links</p>
                <div className='border border-gray-500 w-60'></div>
                <ul className='mt-4 text-gray-300'>
                    <li className='pb-2'>Home</li>
                    <li className='pb-2'>About Us</li>
                    <li className='pb-2'>Project</li>
                    <li className='pb-2'>Team</li>
                    <li className='pb-2'>Contact Us</li>
                </ul>
            </div>

            <div className='flex flex-col mx-8'>
                <p className='text-2xl pb-2'>Our Services</p>
                <div className='border border-gray-500 w-60'></div>
                <ul className='mt-4 text-gray-300'>
                    <li className='pb-2'>Digital Branding</li>
                    <li className='pb-2'>Creative Solution</li>
                    <li className='pb-2'>Web Solution</li>
                </ul>
            </div>

            <div className='flex flex-col mx-8'>
                <p className='text-2xl pb-2'>Social Links</p>
                <div className='border border-gray-500 w-60'></div>
                <ul className='mt-4 text-gray-300'>
                    <li className='pb-2'>Digital Branding</li>
                    <li className='pb-2'>Creative Solution</li>
                    <li className='pb-2'>Web Solution</li>
                </ul>
            </div>

            <div className='flex flex-col mx-8'>
                <p className='text-2xl pb-2'>Location</p>
                <div className='border border-gray-500 w-60'></div>
                <ul className='mt-4 text-gray-300'>
                    <li className='pb-2'>Digital Branding</li>
                    <li className='pb-2'>Creative Solution</li>
                    <li className='pb-2'>Web Solution</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer