import {motion} from 'motion/react';

interface HeroSubtitleProps {
    description:string;
}

export default function HeroSubtitle ({description}:HeroSubtitleProps) {
    return (
        <motion.p
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-blue-100/80 sm:text-xl"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.4}}
        >
            {description}
        </motion.p>
    )
}