import React from 'react';
import { useSpring, animated } from 'react-spring';


export default function Header() {
  const slideInUpAnimation = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(300px)', // Start offscreen
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)', // Slide in to the normal position
    },
    config: {
      duration: 500, // Animation duration in milliseconds
    },
  });

  return (
    <div className='md:ml-28 flex md:mt-20 mt-28'>
      <animated.h2 style={slideInUpAnimation} className='font-normal md:text-9xl text-5xl text-white leading-tight font-sans'>
        Our &nbsp;
        <span id='button' className='border-white border-2 px-8 rounded-full  hover:transition-opacity cursor-pointer'>Innovative</span>
        <br />
        AI
        <br />
        Solution
      </animated.h2>
    </div>
  );
}
