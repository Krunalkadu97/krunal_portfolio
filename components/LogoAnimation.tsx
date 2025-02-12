"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { animationImages } from '@/components/helper/constants';


export const LogoAnimation = () => {
    return(
    <div className='py-8 bg-purple-200/10 glass opacity-80'> 
        <div className='container mx-auto'>
                <div className='overflow-hidden [mask-image: linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]'>
                    <motion.div
                    className='flex gap-14 flex-none pr-14'
                    animate={{translateX: '-50%'}}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop'
                    }}
                    >
                        {animationImages.map((image, index) => (
                            <Image 
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className='rounded-xl'
                                height={180}
                            />
                        ))}
                    </motion.div>
                </div>
        </div>
    </div>
)
}