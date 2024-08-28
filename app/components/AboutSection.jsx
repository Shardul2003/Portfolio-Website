'use client';
import React, {useState, useTransition} from 'react';
import TabButton from './TabButton';
import Image from 'next/image';
// import fs-image from 'public/images/Fullstack_Image.png';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 h-20">
                <li>Web Development & Design</li>
                <li>Fullstack Development</li>
                <li>Machine Learning</li>
                <li>DevOps</li>
                <li>Agile/Scrum</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2 h-20">
                <li>M.Eng in Computer Science @ Virginia Tech</li>
                <li>B.S. in Computer Science @ Virginia Tech</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2 h-20">
                <li>Software Engineering Intern - Coherent Corp.</li>
                <li>Software Engineering Intern - GEICO</li>
                <li>Undergraduate Research Assistant - BIST Lab at Virginia Tech</li>
                <li>President - Association for Computing Machiney (ACM)</li>

            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2 h-20">
                <li>Machine Learning Specialization (Coursera)</li>
                <li>Fullstack Development Bootcamp (Udemy)</li>
                <li>Advanced Technical Interview Prep (CodePath)</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section id="about" className='text-white'>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            {/* <Image src="/images/Fullstack_image.png" width={500} height={500} alt="picture of fullstack tools and technologies"/> */}
            {/* image reference/citation: https://www.linkedin.com/pulse/demystifying-modern-full-stack-development-overview-aadithyan-dqmec */}
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl text-center justify-center font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">
            I am currently completing my Masters in Computer Science, and graduating in May 2025. 
            As a Fullstack Engineer, I have completed two internships at large companies these past few summers,
            gaining experience with tools and technologies like 
            React, Angular, JavaScript, Node.js, Express, MongoDB, Git, Docker, Jira, and more.
            I love to learn about new technologies and am always looking to expand my knowledge and skill set. 
            I am a team player and can take on leadership roles when necessary,
            and built these skills during my time as President of ACM at Virginia Tech, an organizer for VT Hacks, and group projects in my CS courses.
            </p>
            <div className='flex flex-row mt-8'>
            <TabButton 
                selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"}
            > 
                { " " }
                Skills{ " " }
            </TabButton>

            <TabButton 
                selectTab={() => handleTabChange("education")} 
                active={tab === "education"}
            > 
                { " " }
                Education{ " " }
            </TabButton>

            <TabButton 
                selectTab={() => handleTabChange("experience")} 
                active={tab === "experience"}
            > 
                { " " }
                Experience{ " " }
            </TabButton>

            <TabButton 
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
            > 
                { " " }
                Certifications{ " " }
            </TabButton>
            </div>
            <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
    </section>
  )
}

export default AboutSection

