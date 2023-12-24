import React from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Firstvideo() {

    const isMobile = useMediaQuery({ maxWidth: '768px' });

    return (
        <>

            <div className='flex justify-center'>

                <video className="pa-video c-vid" preload="none" poster="assets/video/about-video.mp4" autoPlay loop muted playsInline style={{ borderRadius: '13rem', height: `${isMobile ? '450px' : '400px'}`, objectFit: 'cover', width: `${isMobile ? '90%' : '80%'}` }}>
                    <source src="https://wyr.ai/assets/video/about-video.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video
                </video>
            </div>
        </>
    )
}
