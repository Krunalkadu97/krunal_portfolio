"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import applogo from "@/components/assets/home.webp"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import { IoLogoApple } from "react-icons/io5";
import { TfiAndroid } from "react-icons/tfi";
import { IoGlobeSharp } from "react-icons/io5";
import { PiGithubLogoFill } from "react-icons/pi";
import { ImPointRight } from "react-icons/im";
import { GrTechnology } from "react-icons/gr";


const projects = [  
    {   
        id: 1, 
        year: 2024, 
        title: 'Vodafone-Idea (VI) User Application', 
        image: applogo,
        description: {
            "Description": "Developed a high-performance mobile application for VI (Vodafone-Idea) using React Native, ensuring seamless cross-platform functionality. Focused on delivering an intuitive user experience while implementing Proof of Concept (PoC) solutions to enhance app performance and scalability. Leveraged modern development practices to optimize UI/UX and integrate advanced features, contributing to a robust and efficient digital solution.",
            "Role_and_Responsibilities": [
                "Collaborated with teams to design and implement features.",
                "Delivered PoC solutions and optimized app performance.",
                "Integrated Firebase for real-time data and notifications.",
                "Conducted code reviews and followed best practices."
            ],
            "Technologies": ["React Native", "Redux", "Firebase"],
            "Tools": ["Git", "Jira","X-Code","Android Studio"],
            "Practices": ["Agile", "PoC Implementation"],
            "Deployed": [
                {id: 1, title: 'IOS', link: '', logo: IoLogoApple, color: '#fff'},
                {id: 2, title: 'Android', link: '', logo: TfiAndroid, color: '#fff'},
                // {id: 3, title: 'GitHub', link: '', logo: PiGithubLogoFill, color: '#fff'},
            ],
        }
    },
    {
        id: 2, 
        year: 2023, 
        title: 'Valuebet (Sports Betting Management Platform)', 
        image: applogo,
        description: {
            "Description": "Developed a robust platform to host and manage sports betting clubs, providing an end-to-end solution for administrators and users. The platform featured:    User management, Betting operations, Payments and security and Scalability.",
            "Role_and_Responsibilities": [
                "Collaborated with the team to build new features and fix bugs.",
                "Implement visually clear and dynamic features for displaying real-time betting data, such as odds, statistics, and value bet highlights."
            ],
            "Technologies": ["React Native","React.js" ,"Redux", "Firebase"],
            "Tools": ["Git", "Trello", "X-Code","Android Studio"],
            "Practices": [],
            "Deployed": [
                // {id: 1, title: 'IOS', link: '', logo: IoLogoApple, color: '#fff'},
                // {id: 2, title: 'Android', link: '', logo: TfiAndroid, color: '#fff'},
                // {id: 3, title: 'GitHub', link: '', logo: PiGithubLogoFill, color: '#fff'},
                {id: 4, title: 'Web', link: '', logo: IoGlobeSharp, color: '#fff'},
            ],
        }
    },
    {
        id: 3, 
        year: 2024, 
        title: 'Wagefi (Early Wage Access Mobile and WebApp)', 
        image: applogo,
        description: {
            "Description": "Developed a mobile app for VI (Vodafone-Idea) using React Native, focusing on cross-platform functionality and implementing PoC solutions.",
            "Role_and_Responsibilities": [
               "Developed both mobile and web applications from scratch to final delivery.",
                "Implemented key features like Google Sign-in, Redux, Redux Saga, Stripe, Argyle payroll, Lithics card, and Custom Hooks."                
            ],
            "Technologies": ["React Native","React.js" ,"Redux", "Firebase"],
            "Tools": ["Git", "Jira","X-Code","Android Studio"],
            "Practices": [],
            "Deployed": [
                // {id: 1, title: 'IOS', link: '', logo: IoLogoApple, color: '#fff'},
                // {id: 2, title: 'Android', link: '', logo: TfiAndroid, color: '#fff'},
                // {id: 3, title: 'GitHub', link: '', logo: PiGithubLogoFill, color: '#fff'},
                {id: 4, title: 'Web', link: '', logo: IoGlobeSharp, color: '#fff'},
            ],
        }
    },
    {
        id: 4, 
        year: 2023, 
        title: 'Heart And Paw (Pet Services App)', 
        image: applogo,
        description: {
            "Description": "Heart and Paw is a US-based app for pet owners, allowing users to book appointments for services like Care, Style, and Play at nearby centers.",
            "Role_and_Responsibilities": [
                "Collaborated with the team to build new features and fix bugs.",
                "Addressed performance issues to ensure smooth app functionality.",
                "Implemented key features like Google Sign-in, Redux, Redux Saga, and Webview for handling credit card data."               
            ],
            "Technologies": [ "React Native", "Redux","TypeScript",  "Firebase", "Redux Saga", "Google Sign-in"],
            "Tools": ["Git", "Jira","X-Code","Android Studio"],
            "Practices": [],
            "Deployed": [
                // {id: 1, title: 'IOS', link: '', logo: IoLogoApple, color: '#fff'},
                // {id: 2, title: 'Android', link: '', logo: TfiAndroid, color: '#fff'},
                // {id: 3, title: 'GitHub', link: '', logo: PiGithubLogoFill, color: '#fff'},
                {id: 4, title: 'Web', link: '', logo: IoGlobeSharp, color: '#fff'},
            ],
        }
    },
    {
        id: 5, 
        year: 2024, 
        title: 'Adhouzz', 
        image: applogo,
        description: {
            "Description": "A web application enabling users to book advertising slots across platforms like Radio, Cinema, and Television. Adhouzz offers an intuitive interface for managing bookings, schedules, and payments, with real-time data integration and seamless front-end and back-end interaction.",
            "Role_and_Responsibilities": [
                "Led a team of three developers, managing task allocation, code reviews, and ensuring adherence to timelines and quality standards.",
                "Managed state effectively using Redux, ensuring seamless data flow and user experience."                
            ],
            "Technologies": ["React.js", "Redux", "Firebase"],
            "Tools": ["Git"],
            "Practices": [],
            "Deployed": [
                // {id: 1, title: 'IOS', link: '', logo: IoLogoApple, color: '#fff'},
                // {id: 2, title: 'Android', link: '', logo: TfiAndroid, color: '#fff'},
                // {id: 3, title: 'GitHub', link: '', logo: PiGithubLogoFill, color: '#fff'},
                {id: 4, title: 'Web', link: '', logo: IoGlobeSharp, color: '#fff'},
            ],
        }
    },
    {
        id: 6, 
        year: 2023, 
        title: 'RNB Gujarat Goverment', 
        image: applogo,
        description: {
            "Description": "RNB (Rural & Non-Rural Buildings) Gujarat is a Gujarat Government project designed to manage and track all construction work data within the state. The platform provides efficient tools for monitoring the progress and details of various construction activities, ensuring transparency and effective project management.",
            "Role_and_Responsibilities": [
                "Contributed to developing and implementing new features that enhanced the platform’s functionality.",
                "Addressed performance issues and optimized the app for faster load times and smoother interactions.",
                "Led Redux integration to ensure optimal state management across the platform and improve data flow efficiency.",
                "Collaborated with the team to ensure cross-functional alignment and timely project delivery."
            ],
            "Technologies": ["React.js", "Redux", "useQuery", "Tailwind"],
            "Tools": ["Git"],
            "Practices": [],
            "Deployed": [
                // {id: 1, title: 'IOS', link: '', logo: IoLogoApple, color: '#fff'},
                // {id: 2, title: 'Android', link: '', logo: TfiAndroid, color: '#fff'},
                // {id: 3, title: 'GitHub', link: '', logo: PiGithubLogoFill, color: '#fff'},
                {id: 4, title: 'Web', link: '', logo: IoGlobeSharp, color: '#fff'},
            ],
        }
    },
    {
        id: 7, 
        year: 2024, 
        title: 'Tradetron - Financial Application', 
        image: applogo,
        description: {
            "Description": "Tradetron is a financial application that provides users with live market updates and enables them to trade directly from the platform. The app delivers real-time financial data, empowering users to make informed decisions and manage their trades efficiently.",
            "Role_and_Responsibilities": [
                "Worked on implementing updated features to enhance user experience and functionality.",
                "Focused on performance improvements, ensuring smoother app interactions and faster load times.",
                "Collaborated with the team to optimize the app for better market data handling and trading features."
            ],
            "Technologies": ["React Native", "Context API", "Firebase"],
            "Tools": ["Git","X-Code","Android Studio"],
            "Practices": [],
            "Deployed": [
                // {id: 1, title: 'IOS', link: '', logo: IoLogoApple, color: '#fff'},
                // {id: 2, title: 'Android', link: '', logo: TfiAndroid, color: '#fff'},
                // {id: 3, title: 'GitHub', link: '', logo: PiGithubLogoFill, color: '#fff'},
                {id: 4, title: 'Web', link: '', logo: IoGlobeSharp, color: '#fff'},
            ],
        }
    },
    {
        id: 8, 
        year: 2023, 
        title: 'TradeSutra - Financial Services Application', 
        image: applogo,
        description: {
            "Description": "TradeSutra is a financial services application that offers stock market tips to users based on their subscription status (paid or free). The platform is designed to help users make informed decisions by providing stock market insights tailored to their needs.",
            "Role_and_Responsibilities": [
                "Worked on integrating custom notifications and sounds to enhance user engagement.",
                "Implemented in-app purchases for iOS, enabling users to subscribe to premium features.",
                "Integrated Razorpay payment gateway for smooth and secure transactions.",
                "Collaborated with the team to deliver high-quality features and maintain a smooth user"
            ],
            "Technologies": ["React Native", "Redux", "Firebase"],
            "Tools": ["Git", "X-Code","Android Studio"],
            "Practices": [],
            "Deployed": [
                // {id: 1, title: 'IOS', link: '', logo: IoLogoApple, color: '#fff'},
                // {id: 2, title: 'Android', link: '', logo: TfiAndroid, color: '#fff'},
                // {id: 3, title: 'GitHub', link: '', logo: PiGithubLogoFill, color: '#fff'},
                {id: 4, title: 'Web', link: '', logo: IoGlobeSharp, color: '#fff'},
            ],
        }
    },
    {
        id: 9, 
        year: 2023, 
        title: 'Bhanumart - Multi-Vendor E-Commerce Application', 
        image: applogo,
        description: {
            "Description": "Bhanumart is a multi-vendor e-commerce platform that allows users to browse products from different vendors and make purchases. The app provides users with the flexibility of choosing between UPI payment and Cash on Delivery options for seamless transactions.",
            "Role_and_Responsibilities": [
                "Integrated Google Maps to allow users to find vendors based on location.",
                "Worked on UPI and Card Payment Gateway Integration to provide secure transaction methods.",
                "Implemented Auto-Complete Address functionality to enhance the checkout process and reduce user input errors.",
                "Collaborated with the team to improve app performance and ensure a smooth user experience."
            ],
            "Technologies": ["React Native", "Redux", "Firebase"],
            "Tools": ["Git", "X-Code","Android Studio"],
            "Practices": [],
            "Deployed": [
                // {id: 1, title: 'IOS', link: '', logo: IoLogoApple, color: '#fff'},
                // {id: 2, title: 'Android', link: '', logo: TfiAndroid, color: '#fff'},
                // {id: 3, title: 'GitHub', link: '', logo: PiGithubLogoFill, color: '#fff'},
                {id: 4, title: 'Web', link: '', logo: IoGlobeSharp, color: '#fff'},
            ],
        }
    },
    {
        id: 10, 
        year: 2023, 
        title: 'Events 360', 
        image: applogo,
        description: {
            "Description": "Developed a mobile app for VI (Vodafone-Idea) using React Native, focusing on cross-platform functionality and implementing PoC solutions.",
            "Role_and_Responsibilities": [
                "Collaborated with teams to design and implement features.",
                "Delivered PoC solutions and optimized app performance.",
                "Integrated Firebase for real-time data and notifications.",
                "Conducted code reviews and followed best practices."
            ],
            "Technologies": ["React Native", "Redux", "Firebase"],
            "Tools": ["Git", "Jira","X-Code","Android Studio"],
            "Practices": ["Agile", "PoC Implementation"],
            "Deployed": [
                // {id: 1, title: 'IOS', link: '', logo: IoLogoApple, color: '#fff'},
                // {id: 2, title: 'Android', link: '', logo: TfiAndroid, color: '#fff'},
                // {id: 3, title: 'GitHub', link: '', logo: PiGithubLogoFill, color: '#fff'},
                {id: 4, title: 'Web', link: '', logo: IoGlobeSharp, color: '#fff'},
            ],
        }
    },
]
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Portfolio = () => {
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
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0 4px 24px ${color}`
    return(
        <motion.section 
            id="portfolio" 
            className="py-32 text-white"
            style={{backgroundImage}}
        >
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-8 mb-12 ml-4 md:mb-0 sm:ml-0">
                    <div className="sticky top-10">
                        <h2 className="text-6xl sm:6xl font-bold mb-5">MY <br/> <span className="text-purple-400">Projects</span></h2>
                        <Image 
                            src={selectedProject.image} 
                            alt={selectedProject.title} 
                            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                            width={500}
                            height={300}
                        />
                    </div>
                   
                </div>
                <div className="md:w-2/4">
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="cursor-pointer mb-8 group  p-2 px-4 glass mx-2 sm:mx-0"
                    >
                        <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                        <h3 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors 
                        ${selectedProject.id === project.id ? "text-gray-200":""} duration-300`}>
                            {project.title}
                        </h3>
                        {selectedProject.id === project.id &&(
                            <div className="border-b-2 border-gray-200 my-4"></div>
                        )}
                        {selectedProject.id === project.id &&(
                            <>
                                <p className="text-gray-400 transition-all duration-500 ease-in-out pb-2">
                                    {project.description.Description}
                                </p>
                                <p className="transition-all text-base duration-500 ease-in-out pb-1">Roles and Responsibilities</p>
                                {
                                    project.description.Role_and_Responsibilities.map((item,index)=>(
                                        <div key={index} className="flex flex-row transition-all duration-500 ease-in-out my-1">
                                            <ImPointRight className="mt-1 mr-2" height={16} /> 
                                            <p className="text-gray-400">
                                                {item}
                                            </p>
                                        </div>
                                    ))
                                }

                                <p className="transition-all text-base duration-500 ease-in-out pb-1 mt-2">Framework and Technology</p>
                                {
                                    project.description.Technologies.map((item,index)=>(
                                        <div key={index} className="flex flex-row transition-all duration-500 ease-in-out my-1">
                                            <GrTechnology className="mt-1 mr-2" height={16} /> 
                                            <p className="text-gray-400">
                                                {item}
                                            </p>
                                        </div>
                                    ))

                                     
                                }
                                <div className="flex flex-row items-center mt-4 my-1 gap-4">
                                    {project.description.Deployed.map((item,index)=>(
                                        <motion.a 
                                            href={item.link}
                                            style={{border, boxShadow}}
                                            className="flex w-fit item-center gap-2 rounded-full p-2 mb-1"
                                            whileHover={{scale: 1.015}}
                                            whileTap={{scale: 0.985}}
                                        >
                                            {React.createElement(item.logo, {
                                                                            className: 'w-5 h-5',
                                                                            style: { color: item.color }
                                                                        })}
                                        </motion.a>
                                    ))}
                                    
                                </div>
                            </>
                        
                        )}
                    </div>
                ))}
                </div>
            </div>
           
        </motion.section>
    )
}