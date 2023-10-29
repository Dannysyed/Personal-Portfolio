'use client'
import Example from '@components/FloatingPhone'
import ParticleRing from '@components/PracticalRing'
import Lottie from "lottie-react";
import React from 'react'
import codingAnimate from '../../public/assets/Animation - 1698569557290'
import codingAni from '../../public/assets/Animation - 1698571195969'

const HomePage = () => {
    return (
        <div className='flex flex-col md:h-[70vh]  justify-around  sm:flex-row'>
            <div className=' p-4 flex flex-col items-start gap-2 basis-2/4 justify-center   '>
                <h1 className='text-5xl font-bold'>Hi, I'm Daniyal Mahmood.</h1>
                <h3 className='text-3xl font-semibold'>Full Stack Developer</h3>
                <p>I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!</p>
                <button className='border  p-2 rounded primary_button text-white'>Contact me</button>
            </div>
            <div className='basis-2/5'><Lottie animationData={codingAni} loop={true} height={50} style={{ height: '80vh' }} /></div>
        </div>
    )
}

export default HomePage