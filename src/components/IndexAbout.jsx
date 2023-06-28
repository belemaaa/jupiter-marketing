import React from 'react'
import banner1 from '../assets/banner-images/banner1.jpg'
import aboutUsImage from '../assets/aboutUsImage.jpg'

const IndexAbout = () => {
  return (
    <div className='flex mt-4'>
        <div className='w-1/2 justify-start ml-24 mt-12'>
            <div>
                <p className='text-5xl pb-3 text-orange-700 font-bold'>ABOUT US</p>
                <p className='text-black text-3xl font-semibold'>Leading The Way in Creative <br/> Digital Agency</p>
            </div>

            <div className='border-2 mt-3 w-12 border-pink-300'></div>

            <div>
                <p className='text-2xl pb-3 pt-1'>Best Digital Agency In The World</p>
                <p className='text-sm max-w-xl text-justify'>
                We provide marketing services to startups and small businesses to looking 
                for a partner of their digital media, design & development, lead generation 
                and communications requirents. We work with you, not for you. 
                We have great resources that can help scale your business.
                </p>
                <p className='text-sm max-w-xl text-justify pt-4 pb-8'>
                We are an experienced and talented team of passionate consultants who live
                and breathe search engine marketing. We are an experienced and talented team of consultants
                who are here to bear the burdens of your business.
                </p>
            </div>
            <a href='' className='text-orange-800 underline'>Read More</a>
        </div>

        <img src={aboutUsImage} className='w-1/2 mx-8 mt-6'/>
    </div>
  )
}

export default IndexAbout