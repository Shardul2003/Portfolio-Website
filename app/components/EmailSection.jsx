'use client';
import React from 'react';
import GithubIcon from "../../public/github.svg";
import LinkedinIcon from "../../public/linkedin.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">

        </div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I'm looking for opportunities!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/Shardul2003" >
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>

                <Link href="https://www.linkedin.com/in/sharduldhongade/">
                    <Image src={LinkedinIcon} alt="LinkedIn Icon" />
                </Link>
            </div>
        </div>

        <div>
            <form className="flex flex-col" action="mailto:shardul.dhongade@outlook.com" method="POST">
                <div className="mb-6">
                <label htmlFor="email" className="text-white block mb-2 text-sm font-medium" >
                    Your email
                </label>
                <input
                    name="email"
                    type="email" 
                    id="email" 
                    required 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                    placeholder="someone@example.com"
                />
                </div>

                <div className="mb-6">
                <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium" >
                    Subject
                </label>
                <input
                    name="subject"
                    type="text" 
                    id="subject" 
                    required 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                    placeholder="Subject line"
                />
                </div>

                <div className="mb-6">
                <label htmlFor="message" className="text-white block mb-2 text-sm font-medium" >
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="I am writing to talk about..."
                />
                </div>

                <button
                    type="submit"
                    value="Send"
                    className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection;