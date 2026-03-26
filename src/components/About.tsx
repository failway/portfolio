"use client";
import { motion } from "framer-motion";
import { Server, Layout, Database,Cpu,Brain} from "lucide-react";

const skills = [
  {
  category: "Embedded / MCU",
  icon: <Cpu className="text-orange-400" />,
  items: ["RP2040", "STM32", "Arduino", "C/C++", "CAN", "UART / SPI / I2C"]
  },
  {
    category: "Backend",
    icon: <Server className="text-emerald-400" />,
    items: ["Django", "Python (FastAPI, Flask)", "C++"]
  },
  {
    category: "Infrastructure",
    icon: <Database className="text-purple-400" />,
    items: ["PostgreSQL", "Docker", "Nginx", "Git"]
  },
  {
    category: "AI / ML",
    icon: <Brain className="text-pink-400" />,
    items: [
      "OpenAI API",
      "Telegram Bots (AI)",
      "Automation",
      "Prompt Engineering",
      "Python (AI tools)"
    ]
  }

];

export default function About() {
  return (
    
    <section id="about" className="py-24 scroll-mt-20">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            show: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 italic text-gradient">Кто я такой?</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Я разработчик и инженер с опытом работы с высоконагруженными системами, интеграцией аппаратного обеспечения и автоматизацией процессов. 
            Мне нравится создавать инструменты, которые упрощают сложные задачи и делают технологии доступными и удобными.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            Я работаю с backend для веб-приложений, сервисами и API, а также занимаюсь разработкой и оптимизацией систем, которые требуют глубокой технической экспертизы. 
            Могу проектировать архитектуру проектов, быстро разбираться в новых технологиях и реализовывать сложные решения на Python, C++ и Node.js.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="p-6 glass hover:border-blue-500/30 transition-colors group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-bold mb-3">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span key={item} className="text-xs text-slate-500">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}