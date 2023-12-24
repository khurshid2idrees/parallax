import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function SmartSolution() {
  const [ref, inView] = useInView();

  const slideInUpAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(300px)',
    config: {
      duration: 500,
    },
  });

  return (
    <div ref={ref} className='md:ml-28 flex mt-20'>
      <animated.h2 style={slideInUpAnimation} className='font-normal tracking-wide md:text-9xl text-4xl text-white leading-loose font-sans'>
        SMART
        <br />
        <span className='md:mt-8 mt-0'>SOLUTION</span>
      </animated.h2>
    </div>
  );
}
