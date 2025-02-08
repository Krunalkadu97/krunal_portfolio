"use client";

import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiXcode } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiEslint } from "react-icons/si";


const stcakItems = [
    {id: 1, name: 'React Native', icon: FaReact, color: '#61DAFB'},
    {id: 2, name: 'React', icon: FaReact, color: '#61DAFB'},
    {id: 3, name: 'Redux', icon: SiRedux, color: '#764ABC'},
    {id: 6, name: 'Typescript', icon: SiTypescript, color: '#007ACC'},
    {id: 7, name: 'Tailwind', icon: RiTailwindCssFill, color: '#38B2AC'},
    {id: 10, name: 'Next.js', icon: TbBrandNextjs, color: '#000'}
];
const toolsItem = [
    {id: 5, name: 'Github', icon: FaGithub, color: '#000'},
    {id: 8, name: 'Xcode', icon: SiXcode, color: '#147EFB'},
    {id: 9, name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84'},
    {id: 10, name: 'Postman', icon: SiPostman, color: '#FF6C37'},
    {id: 11, name: 'Jira', icon: SiJira, color: '#0052CC'},
    {id: 12, name: 'ESLint', icon: SiEslint, color: '#4B32C3'},
]

export const Stack = () => {    
    return (
        <section id="stack" className='py-16 glass'>
            <div className='max-w-[1200px] mx-auto px-4 text-center'>
                <h2 className='text-5xl text-gray-200 font-bold mb-4 mt-3'>Technical Stack</h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                    {stcakItems.map((item) => (
                        <div key={item.id}
                        className='flex items-center justify-center flex-col rounded-xl p-4'>
                            <div className='mb-4 bg-white/10 p-6 rounded-xl'>
                                {React.createElement(item.icon, {
                                    className: 'w-32 h-32',
                                    style: { color: item.color }
                                })}
                            </div>
                            <p className='text-gray-400 font-semibold'>{item.name}</p>
                        </div>
                    ))}
                </div>

                <h2 className='text-5xl text-gray-200 font-bold mb-4 mt-3'>Tools</h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                    {toolsItem.map((item) => (
                        <div key={item.id}
                        className='flex items-center justify-center flex-col rounded-xl p-4'>
                            <div className='mb-4 bg-white/10 p-6 rounded-xl'>{React.createElement(item.icon, {
                                className: 'w-32 h-32',
                                style: { color: item.color }
                            })}</div>
                            <p className='text-gray-400 font-semibold'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}