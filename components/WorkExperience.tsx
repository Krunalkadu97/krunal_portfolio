"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import infoLogo from "@/components/assets/Infocentroid.png"
import liseLogo from "@/components/assets/lise.webp"
import iplogo from "@/components/assets/ip.png"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import { ImPointRight } from "react-icons/im";


const projects = [  
    {   
        id: 1, 
        joined: "Sep.2023", 
        last_day: 'Present',
        designation: 'Software Engineer',
        title: 'iProgrammer Solutions Private Limited', 
        description: [
            "Design and implement new features, ensuring optimal performance and scalability.",
            "Collaborate with cross-functional teams to align development with business goals.",
            "Contribute to the full software lifecycle, from design to deployment.",
            "Follow best practices to deliver high-quality solutions and optimize app performance.",
            "Proactively address issues to enhance application efficiency."
        ],
        image: iplogo
    },
    {
        id: 2, 
        joined: "Oct.2021", 
        last_day: 'Sep.2023',
        designation: 'Software Developer (Team Lead)',
        title: 'Lise Infotech Pvt Ltd', 
        description: [
            "Collaborated with clients to deliver solutions from concept to final product.",
            " Led development of core application components from scratch to deployment.",
            "Streamlined development processes and ensured high-quality outputs.",
            "Managed and mentored a team of 5 developers, overseeing tasks and code reviews."
        ],
        image: liseLogo
    },
    {
        id: 3, 
        joined: "Jan.2021", 
        last_day: 'Oct.2021',
        designation: 'React Native Developer',
        title: 'InfoCentroid Software Solutions Pvt. Ltd', 
        description: [
            'Assisted in gathering client requirements and contributed to the full development lifecycle.',
            "Actively participated in application development, from design to deployment.",
            "Implemented best practices to ensure high-quality solutions.",
            "Worked under guidance to enhance skills and meet deadlines."
        ],
        image: infoLogo
    },
]
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const WorkExperience = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const color = useMotionValue(COLORS_TOP[0])
   

    useEffect(()=>{
        animate(color, COLORS_TOP, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror'
        })
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    return(
        <motion.section 
            id="workexperience" 
            className="py-32 text-white"
            style={{backgroundImage}}
        >

            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 ml-4 md:mb-0 sm:ml-0">
                    <h2 className="text-4xl sticky top-20 sm:6xl font-bold mb-10">WORK <br/> <span className="text-purple-400">EXPERIENCE</span></h2>
                </div>
                <div className="md:w-3/4">
        
        {projects.map((project) => (
            <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer mb-8 group glass p-2 px-4 mx-2 sm:mx-0"
            >

                            <p className="text-gray-400 text-base sm:text-lg mb-2">{project.joined} - {project.last_day}</p>
                            <h3 className={`text-xl sm:text-3xl font-semibold group-hover:text-purple-400 transition-colors 
                            ${selectedProject.id === project.id ? "text-gray-200":""} duration-300 mb-2`}>
                                {project.designation}
                            </h3>
                 
                <div className="flex flex-row items-center">
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                            width={50}
                            height={50}
                        />
                <h3 className={`text-lg sm:text-xl ml-4 font-semibold group-hover:text-purple-300 transition-colors 
                ${selectedProject.id === project.id ? "text-gray-200":""} duration-300`}>
                    {project.title}
                </h3>
                </div>
                {selectedProject.id === project.id &&(
                    <div className="border-b-2 border-gray-200 my-4"></div>
                )}
                {selectedProject.id === project.id &&(
                    <>
                    {
                       project?.description&& project?.description.map((item,index)=>(
                            <div key={index} className="flex flex-row transition-all duration-500 ease-in-out my-1">
                                <ImPointRight className="mt-1 mr-2" height={16} /> 
                                <p className="text-gray-400">
                                    {item}
                                </p>
                            </div>
                        ))
                  
                    }
                    </>
                  
                )}
            </div>
        ))}
       
    </div>
            </div>
         
           
        </motion.section>
    )
}