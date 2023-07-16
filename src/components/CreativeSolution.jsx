import React, {useEffect} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import creativeSolution from '../assets/creativeSolutions.jpg'

const CreativeSolution = () => {
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
                  <p className='text-4xl pb-3 text-black font-semibold'>Creative Solution</p>
                  <p className='text-black text-lg font-bold md:text-lg'>
                    Leading The Way in Creative <br/> Digital Agency
                  </p>
              </div>

              <div className='border-2 mt-3 w-12 border-pink-300'></div>

              <div>
                <p className='text-base md:text-sm max-w-xl md:text-justify mt-6' style={{ lineHeight: '1.8' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi dignissimos sapiente 
                fugiat corrupti doloribus officiis quis asperiores, quia dolorum dolores distinctio 
                officia inventore ullam accusantium nisi est doloremque nemo.
                </p>
                <p className='text-base md:text-sm max-w-xl md:text-justify pt-4' style={{ lineHeight: '1.8' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi dignissimos sapiente 
                fugiat corrupti doloribus officiis quis asperiores, quia dolorum dolores distinctio 
                officia inventore ullam accusantium nisi est doloremque nemo.
                </p>
                <p className='text-base md:text-sm max-w-xl md:text-justify pt-4 pb-5 md:pb-8' style={{ lineHeight: '1.8' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur mollitia, nesciunt velit 
                atque minima omnis suscipit voluptatem excepturi neque, at aperiam consequuntur, aut ullam eaque 
                debitis praesentium molestiae maxime quaerat eum veniam labore inventore? Nulla eveniet, ipsum deserunt 
                commodi repellat voluptatibus. Rerum voluptatum itaque dolor alias sapiente corporis harum!
                </p>
              </div>
            </div>
            <img src={creativeSolution} className='md:w-1/2 md:h-96 mx-3 md:mx-8 mt-1 md:mt-24'/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CreativeSolution