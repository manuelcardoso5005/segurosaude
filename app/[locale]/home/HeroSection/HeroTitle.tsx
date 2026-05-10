import {motion} from 'motion/react';

interface HeroTitleProps {
    title:string;
}

export default function HeroTitle({title}:HeroTitleProps){
    return (
        <motion.h1
            className="mb-6 text -6xl font-bold leading-tight sm:text-7xl lg:text-8xl"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.2}}
        >
            <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                {title}
            </span>
        </motion.h1>
    )
}