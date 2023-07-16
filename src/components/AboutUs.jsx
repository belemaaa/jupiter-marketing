import React, {useEffect} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import AboutFull from './AboutFull'
import aboutUs2 from '../assets/aboutUs2.jpg'

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
        <NavBar/>
        <div className='mt-16 overflow-hidden'>
          <div className='flex flex-col md:flex-row '>
            <div className='md:w-1/2 md:justify-start mx-3 md:ml-24 mt-6 md:mt-12'>
              <div>
                  <p className='text-3xl pb-3 text-[#E5442A] font-bold'>About Us</p>
                  <p className='text-black text-2xl md:text-3xl font-semibold'>
                    Leading The Way in Creative <br/> Digital Agency
                  </p>
              </div>

              <div className='border-2 mt-3 w-12 border-pink-300'></div>

              <div>
                <p className='text-base md:text-sm max-w-xl md:text-justify mt-6' style={{ lineHeight: '1.8' }}>
                We provide marketing services to startups and small businesses looking for a partner
                for their digital media, design & development, lead generation, and communications requirements. 
                We work with you, not for you. We have great resources that can help scale your business
                </p>
                <p className='text-base md:text-sm max-w-xl md:text-justify pt-4' style={{ lineHeight: '1.8' }}>
                We are a highly skilled and dedicated team of consultants who specialize in search engine marketing. 
                With our expertise and passion, we are committed to shouldering the burdens of your business, allowing 
                you to focus on what you do best.
                </p>
                <p className='text-base md:text-sm max-w-xl md:text-justify pt-4 pb-5 md:pb-8' style={{ lineHeight: '1.8' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur mollitia, nesciunt velit 
                atque minima omnis suscipit voluptatem excepturi neque, at aperiam consequuntur, aut ullam eaque 
                debitis praesentium molestiae maxime quaerat eum veniam labore inventore? Nulla eveniet, ipsum deserunt 
                commodi repellat voluptatibus. Rerum voluptatum itaque dolor alias sapiente corporis harum!
                </p>
              </div>
            </div>
            <img src={aboutUs2} className='md:w-1/2 md:h-96 mx-3 md:mx-8 mt-1 md:mt-24'/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs