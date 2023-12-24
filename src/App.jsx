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
import Firstvideo from './Components/Firstvideo';
import Leverage from './Components/Leverage';
import SmartSolution from './Components/SmartSolution';
import OurExcellence from './Components/OurExcellence';
import OurVision from './Components/OurVision';
import OurTeam from './Components/OurTeam';

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

  const isMobile = useMediaQuery({ maxWidth: '768px' });

  return (

    <>
      <div>
        <Parallax pages={isMobile ? 9.6 : 9.5} ref={ref}>

          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              background: '#1b9bef'
            }}
          >
            <Header />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.1}
            style={{
              background: '#fff'
            }}
          // speed={0.05}

          >

            <Firstvideo />

          </ParallaxLayer>


          <ParallaxLayer
            offset={2}
            style={{
              background: '#1b9bef',

            }}
          >



            <Leverage />

          </ParallaxLayer>
          <ParallaxLayer
            offset={2.7}
            style={{
              background: "#fff",

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

            <SmartSolution />
          </ParallaxLayer>
          <ParallaxLayer
            offset={isMobile ? 4.5 : 4.7}
            style={{
              backgroundColor: '#1b9bef',
              borderTop: '2px solid #fff'
            }}

          >

            <EnhanQuality />
          </ParallaxLayer>


          <ParallaxLayer
            offset={isMobile ? 5.4 : 5.2}
            style={{
              background: '#f9f9f9'
            }}

          >

            <OurExcellence />
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
            offset={isMobile ? 6.65 : 6.5}
            style={{
              background: '#fff'
            }}

          >

            <OurVision />
          </ParallaxLayer>

          <ParallaxLayer
            offset={isMobile ? 7.1 : 7.2}
            style={{
              backgroundColor: '#f9f9f9',
              borderTop: '2px solid #000'
            }}

          >

            <Vision />
          </ParallaxLayer>

          <ParallaxLayer
            offset={isMobile ? 8.0 : 7.7}
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
            offset={isMobile ? 8.1 : 7.8}
            style={{
              // background: '#1b9bef',
              zIndex: 1,
              position: 'absolute'
            }}
            speed={0.5}

          >

            <div className='md:ml-28 flex md:mt-20 mt-2'>


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
            offset={isMobile ? 9.2 : 8.7}
            style={{
              background: '#fff',
              borderBottom: '2px solid #000'
            }}

          >

            <OurTeam />
          </ParallaxLayer>


        </Parallax>
      </div>


    </>
  );
}

export default App;
