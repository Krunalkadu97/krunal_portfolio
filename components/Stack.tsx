"use client";

import React from 'react';
import {stcakItems, toolsItem} from "@/components/helper/constants";

export const Stack = () => {    
    return (
        <section id="stack" className='py-16 glass'>
            <div className='max-w-[1200px] mx-auto px-4 text-center'>
                <h2 className='text-4xl md:text-5xl text-gray-200 font-bold mb-4 mt-3'>Technical Stack</h2>
                
                
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

                <h2 className='text-4xl md:text-5xl text-gray-200 font-bold mb-4 mt-3'>Tools</h2>
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