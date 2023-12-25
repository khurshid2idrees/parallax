import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Header() {
  const [ref, inView] = useInView();

  const slideInUpAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(300px)',
    config: {
      duration: 500,
    },
  });

  return (
    <div ref={ref} className='md:ml-28 flex md:mt-20 mt-28'>
      <animated.h2 style={slideInUpAnimation} className='font-normal md:text-9xl text-5xl text-white leading-tight font-sans'>
        Our &nbsp;
        <span id='button' className='border-white border-2 px-8 rounded-full'>Innovative</span>
        <br />
        AI
        <br />
        Solution
      </animated.h2>
    </div>
  );
}
