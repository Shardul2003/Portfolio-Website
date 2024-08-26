'use client' // needed for type animation rendering
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                            Hello, I'm {" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Shardul',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'A Fullstack Developer',
                                1000,
                                'A Machine Learning Engineer',
                                1000,
                                'A Graduate Student',
                                1000
                            ]}
                            wrapper="span"
                            speed={35}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Hi there! I'm Shardul Dhongade, a Software Engineer and currently a graduate student at Virginia Tech.
                        I have experience in Fullstack Development, Algorithms and Machine Learning, and DevOps.
                        You can learn more about me below!
                    </p>
                    <div>

                        <a href="mailto:shardul21@vt.edu" method="POST">
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-blue-500 to-pink-500 hover:bg-slate-200 text-white">
                            Hire Me
                        </button>
                        </a>
                        
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-500 via-blue-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                            <a download href="./resume.pdf" >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                            </a>
                        </button>
                    </div>
                </div>

                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#321145] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative">
                    <Image
                        src="/images/Shardul_Updated_PFP.png"
                        alt="profile pic"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;