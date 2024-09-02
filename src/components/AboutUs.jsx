
import React from 'react'
import gymvideo2 from "../assets/gymvideo2.mp4";

const AboutUs = () => {
  return (
    <section id='about-us' className='scroll-smooth'>
    <div className='border-b border-neutral-500 pb-4 lg:mb-35 '>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start ml-4 text-white'>
                <h1 
                className='pb-5 text-4xl font-thin tracking-normal lg:mt-16 lg:text-6xl'>About Us</h1>
              
                <p className='my-0 max-w-xl py-4 font-light tracking-normal'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sint consequatur suscipit consequuntur, fugiat repellendus molestias magnam nesciunt ut assumenda aut quam excepturi mollitia necessitatibus dignissimos doloremque accusamus, numquam vero! At reiciendis maiores eum omnis nobis, excepturi incidunt error illum, dolorum iste impedit praesentium odio aut. Deserunt earum quaerat aliquid, consequatur ullam, aliquam culpa quas delectus laudantium minus nulla nisi iure nesciunt fuga quos totam sint possimus illo magni beatae magnam! Soluta recusandae consectetur dolores, eveniet sunt officia blanditiis quasi totam at delectus libero, labore placeat laborum, iusto cupiditate vel doloremque doloribus ea nobis aperiam saepe nam. Dolor, quis ad?
                </p>
                
            </div>
            </div>
             
        <div className='w-full lg:w-1/2 lg:p-8 mt-6'>
          <div className='flex justify-center items-center h-full'>
            <video
              className='w-full h-auto max-w-lg object-cover'
              controls  
              preload="metadata" 
            >
              <source src={gymvideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default AboutUs