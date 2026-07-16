'use client';
import React, {useState, useTransition} from 'react';
import TabButton from './TabButton';
import {
    CodeBracketIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    CheckBadgeIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/solid';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        icon: CodeBracketIcon,
        content: [
            "Web Development & Design",
            "Fullstack Development",
            "Machine Learning & AI/LLM Engineering",
            "DevOps",
            "Agile/Scrum",
        ]
    },
    {
        title: "Education",
        id: "education",
        icon: AcademicCapIcon,
        content: [
            "M.Eng in Computer Science @ Virginia Tech",
            "B.S. in Computer Science @ Virginia Tech",
        ]
    },
    {
        title: "Experience",
        id: "experience",
        icon: BriefcaseIcon,
        content: [
            "Associate Software Engineer - Capital One",
            "Software Engineering Intern (AI) - Coherent Corp.",
            "Software Engineering Intern - Coherent Corp.",
            "Software Engineering Intern - GEICO",
            "Undergraduate Research Assistant - BIST Lab at Virginia Tech",
            "President - Association for Computing Machiney (ACM)",
        ]
    },
    {
        title: "Certifications",
        id: "certifications",
        icon: CheckBadgeIcon,
        content: [
            "Machine Learning Specialization (Coursera)",
            "Fullstack Development Bootcamp (Udemy)",
            "Advanced Technical Interview Prep (CodePath)",
        ]
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

    const activeTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <div id="about">
        <h2 className="text-center text-4xl font-bold text-white mt-4">
            About Me
        </h2>

        <section className="grid md:grid-cols-2 my-12 py-8 gap-8 md:gap-16 items-start relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-0 right-0"></div>

            <div className="z-10">
                <p className="text-base md:text-lg text-[#ADB7BE] leading-relaxed">
                I'm a Software Engineer at Capital One, where I work on the Messaging Platform team building
                fullstack and backend systems. I completed my M.Eng in Computer Science at Virginia Tech in 2025,
                after three internships gaining experience with tools and technologies like
                React, Go, Java, Node.js, AWS, Docker, LangChain, and more.
                I love to learn about new technologies and am always looking to expand my knowledge and skill set.
                I am a team player and can take on leadership roles when necessary,
                and built these skills during my time as President of ACM at Virginia Tech, an organizer for VT Hacks, and group projects in my CS courses.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                    <span className="flex items-center gap-2 text-sm text-[#ADB7BE] border border-[#33353F] rounded-full px-4 py-2">
                        <BriefcaseIcon className="h-4 w-4 text-purple-500" />
                        SWE @ Capital One
                    </span>
                    <span className="flex items-center gap-2 text-sm text-[#ADB7BE] border border-[#33353F] rounded-full px-4 py-2">
                        <AcademicCapIcon className="h-4 w-4 text-purple-500" />
                        M.Eng, 2025
                    </span>
                    <span className="flex items-center gap-2 text-sm text-[#ADB7BE] border border-[#33353F] rounded-full px-4 py-2">
                        <CheckBadgeIcon className="h-4 w-4 text-purple-500" />
                        ACM President
                    </span>
                </div>
            </div>

            <div className="z-10 bg-[#181818] border border-[#33353F] rounded-xl p-6 md:p-8">
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {TAB_DATA.map((t) => (
                        <TabButton
                            key={t.id}
                            selectTab={() => handleTabChange(t.id)}
                            active={tab === t.id}
                            icon={t.icon}
                        >
                            {t.title}
                        </TabButton>
                    ))}
                </div>

                <ul className={`flex flex-col gap-3 min-h-[14rem] mt-6 transition-opacity duration-300 ${isPending ? "opacity-0" : "opacity-100"}`}>
                    {activeTab.content.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-[#ADB7BE]">
                            <CheckCircleIcon className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </div>
  )
}

export default AboutSection
