import React from 'react'
import gymvideo from "../assets/gymvideo.mp4";

const WhyChooseUs = () => {
  return (
    <div className='border-b border-neutral-500 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        
    
        <div className='w-full lg:w-1/2 order-1 lg:order-2'>
          <div className='flex flex-col items-center lg:items-start ml-4 text-white'>
            <h1 className='pb-5 text-4xl font-thin tracking-normal lg:mt-16 lg:text-6xl'>
              Why Choose Us?
            </h1>
            <p className='my-0 max-w-xl py-4 font-light tracking-normal'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus, accusantium quos enim, dolore consectetur hic culpa doloremque cumque animi fugiat blanditiis ullam perferendis modi. Ex laboriosam incidunt pariatur quos voluptatibus, cum id, accusamus libero ipsum repellendus eligendi maiores eveniet voluptas eum quis dignissimos possimus? Assumenda, alias fuga! Totam ipsa nam suscipit ipsam tenetur! Dignissimos quis, alias autem esse tempore illum beatae blanditiis amet ad suscipit deserunt fugit, quia asperiores odio ipsum quam recusandae dolorum sunt nesciunt. Libero beatae delectus omnis perspiciatis mollitia enim saepe voluptates!            </p>
          </div>
        </div>

        <div className='w-full  mt-6 lg:w-1/2 lg:p-8 order-2 lg:order-1'>
          <div className='flex justify-center items-center h-full'>
            <video
              className='w-full h-auto max-w-lg object-cover '
              controls  
              preload="metadata" 
            >
              <source src={gymvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs