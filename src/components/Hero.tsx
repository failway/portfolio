"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 -z-10 h-[400px] w-full bg-blue-500/10 blur-[120px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 }
        }}
        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-blue-500/30 p-1.5 mb-8 bg-slate-900/50 backdrop-blur-sm shadow-2xl shadow-blue-500/10"
      >
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="/portfolio/me.jpg"
            alt="My Photo"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
      >
        Создаю <span className="text-gradient">будущее</span> <br /> через код
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-slate-400 max-w-2xl mb-10 px-4"
      >
        Разработчик и инженер, специализирующийся на высоконагруженных системах, интеграции железа 
        и создании современных кроссплатформенных интерфейсов.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a href="#projects" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 hover:scale-105 transition-all shadow-lg shadow-white/5">
          Мои проекты
        </a>
        <a href="#contacts" className="px-8 py-4 glass font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all border-white/10">
          Связаться
        </a>
      </motion.div>
    </section>
  );
}