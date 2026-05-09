import {motion} from 'motion/react';
import BadgeAnimationProps from "@/types/HomeContent"

export default function BadgeAnimation({badgeText}:BadgeAnimationProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="mb-8"
        >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-2.5 backdrop-blur-md">
                <motion.span
                    className="relative flex h-3 w-3"
                    animate={{scale: [1, 1.2, 1]}}
                    transition={{duration: 2, repeat: Infinity}}
                >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
                </motion.span>
                <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-sm font-semibold text-transparent">
                    {badgeText} 
                </span>
            </div>
        </motion.div>
    )
}