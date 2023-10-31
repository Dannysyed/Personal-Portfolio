import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer, FiFacebook, FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import danny from '../public/assets/danny (1).png'

const Example = () => {
    return (
        <div className="grid w-full place-content-center bg-gradient-to-br px-4 py-12 text-slate-900">
            <TiltCard />
        </div>
    );
};

const TiltCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
    );

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            // onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
            >
                <div onMouseMove={handleMouseMove} className="flex gap-5 justify-center p-5"><h1>Daniyal Mahmood</h1></div>

                <div onMouseMove={handleMouseMove} className="flex flex-wrap justify-center ">
                    <div className="w-6/12 sm:w-4/5 px-1">
                        <Image src={danny} className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                </div>
                <motion.div onMouseLeave={handleMouseLeave} className=" flex gap-5 justify-center p-5">
                    <motion.a whileHover={{ scale: 2.3 }} href="www.facebook.com" target="_blank"><FiFacebook /></motion.a>
                    <motion.a whileHover={{ scale: 2.3 }} href="instagram.com"><FiInstagram /></motion.a>
                    <motion.a whileHover={{ scale: 2.3 }} href="twitter.com"><FiTwitter /></motion.a>
                    <motion.a whileHover={{ scale: 2.3 }} href="linkden.com"><FiLinkedin /></motion.a>
                    <motion.a whileHover={{ scale: 2.3 }} href="github.com"> <FiGithub /></motion.a>

                </motion.div>
            </div>
        </motion.div>
    );
};

export default Example;