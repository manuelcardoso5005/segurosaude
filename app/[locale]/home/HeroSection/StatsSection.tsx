import {motion} from 'framer-motion';

interface StatsSectionProps {
    activeClientsValue: string;
    activeClients: string;
    satisfactionValue: string;
    satisfaction: string;
    supportValue: string;
    support: string;
}

export default function StatsSection({
    activeClientsValue,
    activeClients,
    satisfactionValue,
    satisfaction,
    supportValue,
    support,
}: StatsSectionProps) {
    return (
        <motion.div
            className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-16"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.8}}
        >
            {[
              {value: activeClients, label: activeClientsValue},
              {value: satisfaction, label: satisfactionValue},
              {value: support, label: supportValue},
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="group cursor-pointer"
                whileHover={{y: -5}}
                transition={{duration: 0.2}}
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all group-hover:border-white/20 group-hover:bg-white/10">
                  <motion.div
                    className="text-2xl font-bold text-white sm:text-4xl md:text-5xl"
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, delay: 1 + i * 0.1}}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="mt-2 text-sm text-blue-200/70">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
    );
}