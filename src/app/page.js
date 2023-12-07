'use client'
import Example from '@components/FloatingPhone'
import ParticleRing from '@components/PracticalRing'
import Lottie from "lottie-react";
import React from 'react'
import codingAnimate from '../../public/assets/Animation - 1698569557290'
import codingAni from '../../public/assets/Animation - 1698571195969'
import python from '../../public/assets/python.png'
import js from '../../public/assets/js.png'
import node from '../../public/assets/nodejs.png'
import css from '../../public/assets/css-3.png'
import html from '../../public/assets/html.png'
import sass from '../../public/assets/sass.png'
import java from '../../public/assets/java.png'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardProfile from '@components/CardProfile';
import ShowCertificates from '@components/ShowCertificate';
import About from '@components/AboutCode';
import { Carousel } from 'react-responsive-carousel';
import jsCertify from '../../public/assets/javascript_intermediate.jpg'

const HomePage = () => {
    let skill_images = [sass, python, js, node, css, html, java]
    let Certificate = [sass, python, js, node]
    return (
        <main className='flex flex-col gap-10'>
            <section className=' flex flex-col p-7 md:h-[70vh]  justify-around sm:flex-row '>
                <section className='m-[auto] flex flex-col gap-2 basis-2/4 justify-center  items-start'>
                    <h1 className='text-5xl font-bold'>Hi, I'm Daniyal Mahmood.</h1>
                    <h3 className='text-3xl font-semibold'>Full Stack Developer</h3>
                    <p>I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!</p>
                    <button className='border  p-2 rounded primary_button text-white'>Contact me</button>
                </section>
                <div className='basis-2/5 ' >
                    <Lottie animationData={codingAni} loop={true} className='h-[50vh] sm:h-[70vh]' />
                </div>
            </section >

            <section className='flex flex-col p-7 md:h-[70vh]  justify-around sm:flex-row '>
                <div>
                    <CardProfile />
                </div>
                <div>
                    <About />
                </div>
            </section>
            <p className='text-5xl font-bold text-center'>What I <span className='text_primary_color'>Do</span>?</p>
            <section className='flex flex-col-reverse p-14 gap-24 sm:gap-20 md:gap-20 lg:gap-20 md:h-[70vh]  justify-around sm:flex-row'>
                <div className='self-center '>
                    <Example />
                </div>
                <div className='flex flex-col gap-4 '>
                    <h3 className='text-4xl'>Full Stack + Mobile App Development</h3>
                    <div className='gap-5 flex h-28 w-3/5  flex-wrap justify-center self-center '>
                        {skill_images.map(val => <Image src={val} height={50} width={50} />
                        )}
                    </div>
                </div>
            </section>
            <p className='text-5xl font-bold text-center text_primary_color'>Certificate</p>
            <section className=''>
                <div>
                    <Carousel
                        infiniteLoop={true}
                        autoPlay={true}
                        swipeable={false}
                        interval={5000}
                        showIndicators={true}
                        showThumbs={false}
                    >
                        <ShowCertificates
                            imgLink={jsCertify}
                            logo={''}
                            about="Responsive Web Design Certification"
                            verifyLink={
                                "https://www.freecodecamp.org/certification/parasbisht/responsive-web-design"
                            }
                        />
                        <ShowCertificates
                            imgLink={jsCertify}
                            logo={''}
                            about="Intermediate JavaScript Certification"
                            verifyLink={"https://www.hackerrank.com/certificates/aee830176dfc"}
                        />
                    </Carousel>

                </div>
                <div></div>
            </section>
        </main>
    )
}

export default HomePage