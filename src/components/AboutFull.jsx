import React from 'react'
import aboutUsImage from '../assets/aboutUsImage.jpg'

const AboutFull = () => {
  return (

    <div className='flex mt-16 w-screen overflow-hidden mb-32 flex-col'>
        <div className='flex flex-col md:flex-row '>
            <div className='md:w-1/2 md:justify-start mx-6 md:ml-24 mt-12'>
                <div>
                    <p className='text-5xl pb-3 text-orange-700 font-bold'>ABOUT US</p>
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

            <img src={aboutUsImage} className='md:w-1/2 mx-6 md:mx-8 mt-6'/>
        </div>
        <p className='ml-24 mr-4 mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias voluptates,
            at omnis, ratione ad accusantium necessitatibus vitae quam dolores iusto harum quia
            numquam illo facere! Ut excepturi optio laudantium labore, exercitationem suscipit
            id asperiores quam pariatur sapiente rerum, quos earum dolor inventore veritatis.
            Suscipit, qui ipsa eaque accusantium doloribus illum consectetur harum amet quo 
            modi perferendis, porro, consequuntur laboriosam voluptatum tempora accusamus voluptas
            quae est quisquam molestiae laborum. Non.
        </p>
    </div>
    
  )
}

export default AboutFull