import React, { useState } from 'react';
import YouTube from 'react-youtube';

const AboutUs = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextDisplay = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section id='about-us' className='scroll-smooth'>
      <div className='border-b border-neutral-500 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
          <div className='w-full mt-4 lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start ml-4 text-white'>
              <h1 className='pb-5 text-4xl font-thin tracking-normal lg:mt-16 lg:text-6xl'>About Us</h1>
              
              <p className='my-0 max-w-xl py-4 font-light tracking-normal'>
                {showFullText ? (
                  <>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sint consequatur suscipit consequuntur, fugiat repellendus molestias magnam nesciunt ut assumenda aut quam excepturi mollitia necessitatibus dignissimos doloremque accusamus, numquam vero! At reiciendis maiores eum omnis nobis, excepturi incidunt error illum, dolorum iste impedit praesentium odio aut. Deserunt earum quaerat aliquid, consequatur ullam, aliquam culpa quas delectus laudantium minus nulla nisi iure nesciunt fuga quos totam sint possimus illo magni beatae magnam! Soluta recusandae consectetur dolores, eveniet sunt officia blanditiis quasi totam at delectus libero, labore placeat laborum, iusto cupiditate vel doloremque doloribus ea nobis aperiam saepe nam. Dolor, quis ad?
                  </>
                ) : (
                  <>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sint consequatur suscipit consequuntur, fugiat repellendus molestias...
                  </>
                )}
              </p>

              <button onClick={toggleTextDisplay} className='text-orange-500 hover:underline'>
                {showFullText ? 'Show Less' : 'Read More'}
              </button>
              
            </div>
          </div>
             
          <div className='w-full lg:w-1/2 lg:p-8 mt-6'>
            <div className='flex justify-center items-center h-full'>
              <YouTube
                videoId="HQfF5XRVXjU"
                opts={{
                  width: '100%',
                  height: 'auto',
                  playerVars: {
                    autoplay: 0,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
