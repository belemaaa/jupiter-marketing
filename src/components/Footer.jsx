import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 flex flex-col'>
        <div className='flex flex-row mx-24 text-white'>
            <div className='flex flex-col'>
                <p>Quick Links</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Project</li>
                    <li>Team</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer