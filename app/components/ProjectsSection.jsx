'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData =[
    {
        id: 1,
        title: "Machine Learning Blog Site",
        description: "I created a dynamic blog site using R and Python to showcase various ML techniques. Each blog I authored details the ML processes I applied, from data/exploratory analysis to algorithm application.",
        image: "/images/projects/ML_Blog_Project_Preview.png",
        tag: ["All", "Web"],
        techStack: ["Python", "R", "RStudio", "Quarto", "ML Libraries"],
        gitUrl: "https://github.com/Shardul2003/Machine_Learning_Blogs",
        previewUrl: "https://shardul2003.github.io/Machine_Learning_Blogs/blog.html",
    },
    {
        id: 2,
        title: "SkillSprint",
        description: "Enter a link for a technical job posting to get your very own personalized study guide, designed to help you prepare for the job and its interviews!",
        image: "/images/projects/SkillSprint_Image2.png",
        tag: ["All", "Web"],
        techStack: ["Flask", "Python", "REST APIs", "Next.js", "JavaScript", "Tailwind"],
        gitUrl: "https://github.com/Shardul2003/SkillSprint",
        previewUrl: "https://devpost.com/software/skillsprint",
    },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filterProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div id="projects" className="mb-8">
        <h2 className="text-center text-4xl font-bold text-white mt-4">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"}
            />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filterProjects.map( (project) => 
            <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}  
                imgUrl={project.image} 
                tags={project}
                techStack={project.techStack}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                /> 
            )}
        </div>
    </div>
  )
}

export default ProjectsSection;