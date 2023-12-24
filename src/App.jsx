import { useRef } from 'react';


import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { useSpring } from 'react-spring';
import '../src/styles/style.css';
import Carasal from './Components/Carasal';
import Approach from './Components/Approach';

function App() {
  const ref = useRef();

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

    <>
      <div>
        <Parallax pages={4} ref={ref}>

          <ParallaxLayer
            offset={0}
            speed={0.05}
            style={{
              background: '#1b9bef'
            }}
          >
            <div className='md:ml-28 flex mt-20'>


              <h2 className='font-normal md:text-9xl text-4xl text-white leading-tight font-sans'>
                Our &nbsp;
                <span id='button' className='border-white border-2 px-8 rounded-full'>Innovative</span>
                <br />
                AI
                <br />
                Solution
              </h2>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.1}
          // speed={0.05}

          >

            <div>

              <div className='flex justify-center'>

                <video className="pa-video c-vid" preload="none" poster="assets/video/about-video.mp4" autoPlay loop muted playsInline style={{ borderRadius: '13rem', height: '400px', objectFit: 'cover', width: '80%' }}>
                  <source src="https://wyr.ai/assets/video/about-video.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video
                </video>
              </div>
            </div>

          </ParallaxLayer>


          <ParallaxLayer
            offset={2}
            style={{
              background: '#1b9bef',

            }}
          >

            <div class="py-16" >
              {/* <div class="container m-auto px-6 md:px-12 xl:px-6"> */}
              <div class="space-y-6 md:space-y-0 md:flex flex-wrap md:gap-6 lg:items-center lg:gap-12 md:ml-28 ml-0">

                <div className='flex flex-wrap md:w-3/4 w-full'>


                  <h2 className='font-semibold md:text-5xl text-4xl  text-white md:leading-normal leading-normal font-sans'>
                    We leverage cutting-edge technology and industry best practices to deliver accurate, efficient, and reliable inspection services.
                  </h2>
                </div>




              </div>
              {/* </div> */}
            </div>

          </ParallaxLayer>
          <ParallaxLayer
            offset={2.7}
            style={{
              background: "black",

            }}
          >


            <Carasal />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3.5}
            style={{
              borderTop: '2px solid #fff'
            }}

          >

            <Approach/>
          </ParallaxLayer>

        </Parallax>
      </div>


    </>
  );
}

export default App;
