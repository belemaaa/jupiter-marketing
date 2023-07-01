import React from 'react'
import aboutUsImage from '../assets/aboutUsImage.jpg'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'

const AboutFull = () => {
  return (

    <div className='flex mt-16 w-screen overflow-hidden flex-col'>
        <div className='flex flex-col md:flex-row '>
            <div className='md:w-1/2 md:justify-start mx-6 md:ml-24 mt-6 md:mt-12'>
                <div>
                    <p className='text-5xl pb-3 text-orange-700 font-bold'>About Us</p>
                    <p className='text-black text-2xl md:text-3xl font-semibold'>Leading The Way in Creative <br/> Digital Agency</p>
                </div>

                <div className='border-2 mt-3 w-12 border-pink-300'></div>

                <div>
                    <p className='text-base md:text-sm max-w-xl md:text-justify'>
                    We provide marketing services to startups and small businesses looking for a partner
                    for their digital media, design & development, lead generation, and communications requirements. 
                    We work with you, not for you. We have great resources that can help scale your business
                    </p>
                    <p className='text-base md:text-sm max-w-xl md:text-justify pt-4'>
                    We are a highly skilled and dedicated team of consultants who specialize in search engine marketing. 
                    With our expertise and passion, we are committed to shouldering the burdens of your business, allowing 
                    you to focus on what you do best.
                    </p>
                    <p className='text-base md:text-sm max-w-xl md:text-justify pt-4 pb-5 md:pb-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur mollitia, nesciunt velit 
                    atque minima omnis suscipit voluptatem excepturi neque, at aperiam consequuntur, aut ullam eaque 
                    debitis praesentium molestiae maxime quaerat eum veniam labore inventore? Nulla eveniet, ipsum deserunt 
                    commodi repellat voluptatibus. Rerum voluptatum itaque dolor alias sapiente corporis harum!
                    </p>
                </div>
            </div>

            <img src={aboutUsImage} className='md:w-1/2 mx-6 md:mx-8 mt-1 md:mt-6'/>
        </div>
        <p className='md:ml-24 mr-4 mt-5 mx-6 md:mx-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias voluptates,
            at omnis, ratione ad accusantium necessitatibus vitae quam dolores iusto harum quia
            numquam illo facere! Ut excepturi optio laudantium labore, exercitationem suscipit
            id asperiores quam pariatur sapiente rerum, quos earum dolor inventore veritatis.
            Suscipit, qui ipsa eaque accusantium doloribus illum consectetur harum amet quo 
            modi perferendis, porro, consequuntur laboriosam voluptatum tempora accusamus voluptas
            quae est quisquam molestiae laborum. Non.
        </p>

        <div className='bg-black bg-opacity-5 mt-20'>
            <div className='py-12'>
                <div className=' ml-24'>
                    <p className='text-4xl pb-3 text-orange-700 font-bold'>Why Choose Us?</p>
                </div>
                <div className='ml-24 mr-4'>
                    <p>
                    As a leading digital marketing company, Jupiter Marketing is the ultimate choice for businesses 
                    looking to thrive in the online world. Our team of seasoned professionals possesses a deep understanding 
                    of the digital landscape and has a proven track record of delivering exceptional results for our clients. 
                    We combine our extensive knowledge with a tailored approach to create comprehensive digital marketing strategies 
                    that drive measurable success.
                    </p>
                    <p className='my-6'>
                    When you partner with us, you gain access to a wide range of digital marketing services designed to elevate your brand 
                    and accelerate your business growth. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social 
                    media management and content marketing, we cover all aspects of digital marketing to ensure your brand gets the attention it deserves. 
                    Our team works closely with you to understand your unique goals and objectives, crafting personalized strategies that resonate 
                    with your target audience and deliver tangible outcomes.
                    </p>
                    <p>
                    In a highly competitive digital landscape, choosing Jupiter Marketing means choosing a trusted partner who is 
                    committed to your success. With our expertise, innovative approach, and dedication to exceeding client expectations, 
                    we are well-equipped to take your digital marketing efforts to new heights.
                    </p>
                </div>
            </div>
            
        </div>

        <div className='flex items-center justify-center my-10 flex-col pt-4 pb-3'>
            <p className='text-black'>
                Find us on all socials
            </p>
            <div className='flex flex-row mt-2'>
                <FaFacebookF size={20} className='text-black'/>
                <IoLogoTwitter size={20} className='text-blaxk mx-3' />
                <FaLinkedinIn size={20} className='text-black mr-3' />
                <MdOutlineEmail size={20} className='text-black' />

            </div>
        </div>   
    </div>
    
  )
}

export default AboutFull