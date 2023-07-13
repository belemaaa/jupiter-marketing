import React from 'react'
import {RxDotFilled} from 'react-icons/rx'

const GoogleMap = () => {
  return (
    <div className=' overflow-hidden'>
      <div className='md:mx-0 shadow-xl'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79610.28569369689!2d-0.39316450259348285!3d51.42470685807507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760c89fe95d3df%3A0x16e453e3acb6b940!2sKing%20St%2C%20Twickenham%2C%20UK!5e0!3m2!1sen!2sng!4v1688658956112!5m2!1sen!2sng" 
        // width="1200" 
        className='w-full md:w-[600px] h-60 md:h-[600px]'
        // height="600" 
        style={{ border: "0" }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
       
    </div>
  )
}

export default GoogleMap