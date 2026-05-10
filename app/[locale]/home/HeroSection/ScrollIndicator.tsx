import {motion} from 'motion/react';

export default function ScrollIndicator (){
    return (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 1.5}}
        >
          <motion.div
            animate={{y: [0, 10, 0]}}
            transition={{duration: 2, repeat: Infinity}}
            className="flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-xs uppercase tracking-wider">Role</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
    )
}