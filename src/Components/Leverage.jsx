import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Leverage() {
    const [ref, inView] = useInView();

    const slideInRightAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-300px)',
        config: {
            duration: 500,
        },
    });

    return (
        <div ref={ref} className="md:py-16 py-0">
            <div className="space-y-6 md:space-y-0 md:flex flex-wrap md:gap-6 lg:items-center lg:gap-12 md:ml-28 ml-0">
                <div className="flex flex-wrap md:w-3/4 w-full">
                    <animated.h2 style={slideInRightAnimation} className="font-semibold md:text-5xl text-4xl text-white md:leading-normal leading-normal font-sans">
                        We leverage cutting-edge technology and industry best practices to deliver accurate, efficient, and reliable inspection services.
                    </animated.h2>
                </div>
            </div>
        </div>
    );
}
