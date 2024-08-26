'use client';
import React from 'react';
import ContactCard from './ContactCard';
import Resume from './Resume';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import GithubIcon from "../../public/github.svg";
import LinkedinIcon from "../../public/linkedin.svg";
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <div id="contact">
    <h2 className="text-center text-4xl font-bold text-white mt-4">
        Contact
    </h2>

    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
    
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">

        </div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I'm always looking for new and exciting opportunities! If you would like to collaborate or chat with me, feel free to message me via email or LinkedIn.
            </p>
        </div>

        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">


        <Resume />


        <div
        className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse w-64 h-24"
        >
            <a href="https://github.com/Shardul2003" className="w-full sm:w-auto bg-slate-800 hover:border-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
                <div className="mr-4">
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"/></svg>
                    </div>
                    <div>

                        <div className="text-lg font-semibold">GitHub</div>
                        {/* <div className="text-sm">website.com/resume</div> */}
                    
                </div>
            </a>
        </div>

        <div
        className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse w-64 h-24"
        >
            <a href="https://www.linkedin.com/in/sharduldhongade/" className="w-full sm:w-auto bg-slate-800 hover:border-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
                <div className="mr-4">
                <xml version="1.0"><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/></svg></xml>
                    </div>
                    <div>

                        <div className="text-lg font-semibold">LinkedIn</div>
                        {/* <div className="text-sm">website.com/resume</div> */}
                    
                </div>
            </a>
        </div>

        <div
        className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse w-64 h-24"
        >
            <button type="submit" className="w-full sm:w-auto bg-slate-800 hover:border-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
                <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="24px" height="24px" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

                    </div>
                    <div>

                        <div className="text-lg font-semibold">Email</div>
                        {/* <div className="text-sm">website.com/resume</div> */}
                    
                </div>
            </button>
        </div>
        

        </div>

    </section>
    </div>
  )
}

export default ContactSection;