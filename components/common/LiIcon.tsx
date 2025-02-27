import React from 'react'
import { motion, useScroll } from 'framer-motion';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any;
}

export default function LiIcon({ref}: Props) {

    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["center end", "center center"]
    });
  return (
    <figure className='absolute left-0 stroke-purple-400'> 
        <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className='stroke-purple-400 stroke-1 fill-none'/>
            <motion.circle 
                cx="75" cy="50" r="20" 
                className='stroke-[5px] fill-black-200'
                style={{
                    pathLength: scrollYProgress
                }}
            />
            <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-purple-400'/>
        </svg>
    </figure>
  )
}