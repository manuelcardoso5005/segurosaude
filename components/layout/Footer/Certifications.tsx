
import {motion} from 'framer-motion';
import {InView} from "@/types/FooterTypes"

export default function Certifications ({isInView}:InView) {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={isInView ? {opacity: 1} : {}}
        transition={{duration: 0.5, delay: 0.7}}
        className="border-t border-white/10 py-8"
        >
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between">
            {/* Developer credit */}
            <motion.a
            href="https://manuelcardoso.dev" // Seu portfolio/site
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{scale: 1.02}}
            className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-6 py-3 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20"
            >
            {/* Avatar com gradiente */}
            <motion.div
                whileHover={{rotate: [0, -10, 10, -10, 0]}}
                transition={{duration: 0.5}}
                className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-600 to-purple-600 font-bold text-white shadow-lg"
            >
                <span className="relative z-10">MC</span>
                <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100"
                initial={{scale: 0}}
                whileHover={{scale: 1}}
                />
            </motion.div>

            {/* Texto */}
            <div className="flex flex-col">
                <p className="text-xs text-gray-400 transition-colors group-hover:text-gray-300">
                Desenvolvido por
                </p>
                <p className="font-semibold text-white transition-colors group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                Manuel Cardoso
                </p>
            </div>

            {/* Seta */}
            <motion.div
                initial={{x: 0, opacity: 0}}
                whileHover={{x: 5, opacity: 1}}
                className="text-blue-400"
            >
                <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
                </svg>
            </motion.div>
            </motion.a>

            {/* Social links do desenvolvedor (opcional) */}
            <div className="flex items-center gap-3">
            <motion.a
                href="https://github.com/manuelcardoso" // Seu GitHub
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{y: -3}}
                whileTap={{scale: 0.9}}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
                aria-label="GitHub"
            >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </motion.a>

            <motion.a
                href="https://linkedin.com/in/manuelcardoso" // Seu LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{y: -3}}
                whileTap={{scale: 0.9}}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-blue-400"
                aria-label="LinkedIn"
            >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            </motion.a>

            <motion.a
                href="https://portfolio.manuelcardoso.dev" // Seu portfolio
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{y: -3}}
                whileTap={{scale: 0.9}}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-purple-400"
                aria-label="Portfolio"
            >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            </motion.a>
            </div>
        </div>
        </motion.div>
    )
}