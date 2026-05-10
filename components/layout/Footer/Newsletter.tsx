import {motion} from 'framer-motion';
import {InView} from "@/types/FooterTypes"

export default function Newsletter({isInView}:InView){
    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={isInView ? {opacity: 1, y: 0} : {}}
        transition={{duration: 0.5, delay: 0.5}}
        className="border-t border-white/10 py-12"
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-xl font-bold text-white">
              Receba dicas de saúde e ofertas exclusivas
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Cadastre-se e fique por dentro das novidades
            </p>
          </div>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <motion.button
              type="submit"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-shadow hover:shadow-xl hover:shadow-blue-500/50"
            >
              Inscrever
            </motion.button>
          </form>
        </div>
      </motion.div>
    )
}