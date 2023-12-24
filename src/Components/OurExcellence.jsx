import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function OurExcellence() {
  const [ref, inView] = useInView();

  const slideInUpAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-50px)', 
    config: {
      duration: 500,
    },
  });

  return (
    <div ref={ref} className='md:ml-28 flex mt-20'>
      <animated.h2 style={slideInUpAnimation} className='font-normal tracking-wide md:text-9xl text-4xl text-black leading-loose font-sans'>
        OUR
        <br />
        <span className='mt-8'>EXCELLENCE</span>
      </animated.h2>
    </div>
  );
}
