import { useRef } from 'react';


import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { useSpring } from 'react-spring';
import '../src/styles/style.css';
import Carasal from './Components/Carasal';
import Approach from './Components/Approach';
import EnhanQuality from './Components/EnhanQuality';
import Excellence from './Components/Excellence';
import Vision from './Components/Vision';

import { useMediaQuery } from 'react-responsive';
import Header from './Components/Header';

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

  const isMobile = useMediaQuery({maxWidth:'768px'});

  return (

    <>
      <div>
        <Parallax pages={9.5} ref={ref}>

          <ParallaxLayer
            offset={0}
            speed={0.05}
            style={{
              background: '#1b9bef'
            }}
          >
            <Header/>
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={1.1}
          // speed={0.05}

          >

            {/* <div> */}

              <div className='flex justify-center'>

                <video className="pa-video c-vid" preload="none" poster="assets/video/about-video.mp4" autoPlay loop muted playsInline style={{ borderRadius: '13rem', height: '400px', objectFit: 'cover', width: '80%' }}>
                  <source src="https://wyr.ai/assets/video/about-video.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video
                </video>
              </div>
            {/* </div> */}

          </ParallaxLayer>


          <ParallaxLayer
            offset={2}
            style={{
              background: '#1b9bef',

            }}
          >

            <div class="py-16" >

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

            <Approach />
          </ParallaxLayer>

          <ParallaxLayer
            offset={4.0}
            style={{
              background: '#1b9bef'
            }}

          >

            <div className='md:ml-28 flex mt-20'>


              <h2 className='font-normal tracking-wide md:text-9xl text-4xl text-white leading-loose font-sans'>
                SMART
                <br />

                <span className='mt-8'>SOLUTION</span>
              </h2>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4.7}
            style={{
              backgroundColor: '#1b9bef',
              borderTop: '2px solid #fff'
            }}

          >

            <EnhanQuality />
          </ParallaxLayer>


          <ParallaxLayer
            offset={5.2}
            style={{
              background: '#f9f9f9'
            }}

          >

            <div className='md:ml-28 flex mt-20'>


              <h2 className='font-normal tracking-wide md:text-9xl text-4xl text-black leading-loose font-sans'>
                OUR
                <br />

                <span className='mt-8'>EXCELLENCE</span>
              </h2>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={5.9}
            style={{
              backgroundColor: '#f9f9f9',
              borderTop: '2px solid #000'
            }}

          >

            <Excellence />
          </ParallaxLayer>


          <ParallaxLayer
            offset={6.5}
            style={{
              background: '#fff'
            }}

          >

            <div className='md:ml-28 flex mt-20'>


              <h2 className='font-normal tracking-wide md:text-9xl text-4xl text-black leading-loose font-sans'>
                OUR
                <br />

                <span className='mt-8'>VISION</span>
              </h2>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={7.2}
            style={{
              backgroundColor: '#f9f9f9',
              borderTop: '2px solid #000'
            }}

          >

            <Vision />
          </ParallaxLayer>

          <ParallaxLayer
            offset={7.7}
            // speed={0.5}
            style={{ backgroundColor: '#000', zIndex: 0 }}
            
            >
            {/* Adjust zIndex as needed */}
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                
                zIndex: -999, // Place the video below other content
              }}
            >
              <source src="https://wyr.ai/assets/video/waves.mp4" type="video/mp4" />

            </video>
          </ParallaxLayer>

          <ParallaxLayer
            offset={7.8}
            style={{
              // background: '#1b9bef',
              zIndex:1,
              position:'absolute'
            }}
            speed={0.5}

          >

            <div className='md:ml-28 flex mt-20'>


              <h2 className='font-normal tracking-wide md:text-9xl text-4xl text-white leading-loose font-sans'>





                WE CREATE
                A ROBUST
                ALGORITHM
                POWERED
                BY OUR AI
                TECHNOLOGY
              </h2>
            </div>
          </ParallaxLayer>



          <ParallaxLayer
            offset={8.7}
            style={{
              background: '#fff',
              borderBottom:'2px solid #000'
            }}

          >

            <div className='md:ml-28 flex mt-20'>


              <h2 className='font-normal tracking-wide md:text-9xl text-4xl text-black leading-loose font-sans'>
                OUR
                <br />
                <span className='mt-8'>TEAM</span>
              </h2>
            </div>
          </ParallaxLayer>


        </Parallax>
      </div>


    </>
  );
}

export default App;
