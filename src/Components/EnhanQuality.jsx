import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function EnhanQuality() {
  const [ref, inView] = useInView();

  const fadeInAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    config: {
      duration: 500,
    },
  });

  return (
    <div ref={ref} className="py-16">
      <div className="container">
        <div className="space-y-6 md:space-y-0 md:flex flex-wrap lg:items-center">
          <div className="md:7/12 lg:w-4/12">
            
          </div>
          <div className="md:4/12 lg:w-8/12 md:flex block md:justify-between">
            <h2 className="text-sm w-full md:px-0 pl-8 text-white font-sans">ENHANCING QUALITY THROUGH EXPERTISE </h2>
            <animated.p
              style={fadeInAnimation}
              className="text-xl font-normal mr-20 md:pt-0 pt-2 text-white font-sans ml-8"
            >
              By combining our technical expertise with a commitment to continuous improvement, we help our clients identify and resolve quality issues early on, reducing costs and ensuring the highest level of quality across their supply chains.
            </animated.p>
          </div>
        </div>
      </div>
    </div>
  );
}
