"use client";
import { motion } from "framer-motion";
import { 
  GitBranch, 
  Send, 
  Mail, 
  Code2, 
  Cpu, 
  Globe, 
  GitBranchIcon, 
  
} from "lucide-react";

const FloatingIcon = ({ children, x, y, duration, delay, blur = "0px" }: any) => (
  <motion.div
    className="absolute hidden md:block z-0"
    style={{ 
      left: x, 
      top: y, 
      filter: `blur(${blur})`,
      color: 'rgba(59, 130, 246, 0.2)'
    }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ 
      y: [0, -60, 0],
      x: [0, 20, 0],
      rotate: [0, 15, -15, 0],
      opacity: [0, 1, 1, 0] 
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay, 
      ease: "easeInOut" 
    }}
  >
    {children}
  </motion.div>
);

export default function ContactSection() {
  return (
    <section id="contacts" className="mt-40 relative py-24 min-h-[700px] scroll-mt-20 overflow-visible">
      
      <div className="absolute inset-0 pointer-events-none w-full h-full">
        <FloatingIcon x="5%" y="10%" duration={6} delay={0}><GitBranch size={60} /></FloatingIcon>
        <FloatingIcon x="80%" y="5%" duration={8} delay={1}><Send size={40} /></FloatingIcon>
        <FloatingIcon x="70%" y="60%" duration={7} delay={2} blur="2px"><Mail size={70} /></FloatingIcon>
        <FloatingIcon x="10%" y="70%" duration={9} delay={0.5} blur="1px"><Code2 size={50} /></FloatingIcon>
        <FloatingIcon x="45%" y="-5%" duration={10} delay={3} blur="3px"><Cpu size={45} /></FloatingIcon>
        <FloatingIcon x="90%" y="50%" duration={7} delay={1.5}><Globe size={55} /></FloatingIcon>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-4xl mx-auto glass p-12 md:p-20 text-center relative z-10 border-white/5 shadow-2xl overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter italic">
            Давайте <span className="text-blue-500">работать</span> вместе
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Я всегда открыт для новых вызовов, сложных архитектур и амбициозных проектов. 
            Напишите мне — обсудим ваш кейс!
          </p>
        </motion.div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-20">
          <motion.a 
            href="mailto:kondrik500@gmail.com" 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-slate-200 transition-all shadow-xl shadow-white/5 w-full sm:w-auto justify-center"
          >
            <Mail size={20} /> Написать на почту
          </motion.a>
          
          <motion.a 
            href="https://t.me/yanezabiltebya" 
            target="_blank"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 glass rounded-2xl font-bold hover:bg-white/10 transition-all border-white/10 w-full sm:w-auto justify-center"
          >
            <Send size={20} className="text-blue-400" /> Telegram
          </motion.a>
        </div>

        <div className="mt-12 pt-12 border-t border-white/5 flex justify-center gap-8 text-slate-500">
           <a href="https://github.com/failway" target="_blank" className="hover:text-white transition-colors">
             <GitBranchIcon size={22} />
           </a>

           <a href="https://www.avito.ru/kazan/predlozheniya_uslug/boty_python_avtomatizatsiya_neyroseti_3633152318" target="_blank" className="hover:text-[#ff5a19] transition-colors">
            <svg 
            width="22" height="22" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            >
            <circle cx="12" cy="12" r="10" />
            <circle cx="8" cy="12" r="3" fill="currentColor" />
            <circle cx="16" cy="12" r="2" />
            </svg>
        </a>

        <a href="https://kwork.ru/user/nezabudutebya" target="_blank" className="hover:text-[#1dbf73] transition-colors">
            <svg 
            width="22" height="22" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            >
            <path d="M4 4h5l4 8 4-8h5" />
            <path d="M4 20h5l4-8 4 8h5" />
            </svg>
        </a>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] -z-10 rounded-full pointer-events-none" />
    </section>
  );
}