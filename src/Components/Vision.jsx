import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Vision() {
  const [ref, inView] = useInView();

  const slideInUpAnimation = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(20px)', // Start offscreen
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
    },
    config: {
      duration: 500,
    },
  });

  return (
    <div ref={ref} class="md:py-16 py-0">
      <div class="container">
        <div class="space-y-6 md:space-y-0 md:flex flex-wrap lg:items-center">
          <div class="md:7/12 lg:w-4/12">
            <div class="mt-8 md:px-28 px-6">
              
            </div>
          </div>
          <div class="md:4/12 lg:w-8/12 md:flex block md:justify-between">
            <h2 class="text-sm w-full md:px-0 pl-8 text-black font-sans">OUR VISION </h2>
            <animated.p style={slideInUpAnimation} className='text-xl font-normal mr-20 md:pt-0 pt-2 text-black font-sans ml-8'>
              Our journey began with a vision to revolutionize the way businesses approach quality control and assurance. Today, we have grown into a trusted partner for numerous industries, offering innovative solutions that drive operational excellence and ensure customer satisfaction.
            </animated.p>
          </div>
        </div>
      </div>
    </div>
  );
}
