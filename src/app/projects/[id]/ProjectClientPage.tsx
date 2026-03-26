"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { 
  ArrowLeft, GitBranch, ExternalLink, Image as ImageIcon,
  Calendar, Layers, ChevronLeft, ChevronRight
} from "lucide-react";

export default function ProjectClientPage({ project }: { project: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === project.media.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? project.media.length - 1 : prev - 1));
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-24 min-h-screen">
      {/* Кнопка Назад */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Назад к списку
        </Link>
      </motion.div>

      {/* Шапка проекта */}
      <section className="mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 glass text-xs font-medium text-blue-400 border-blue-500/20">{project.status}</span>
            <div className="flex items-center gap-1.5 text-slate-500 text-sm"><Calendar size={14} />{project.date}</div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{project.title}</h1>
        </motion.div>
      </section>

      {/* СЛАЙДЕР */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <ImageIcon size={22} className="text-blue-500" />
            <h2 className="text-2xl font-semibold">Фото/Видео</h2>
          </div>
          <div className="text-sm text-slate-500 font-mono">
            {currentIndex + 1} / {project.media?.length}
          </div>
        </div>

        <div className="relative group">
          <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full"
              >
                {project.media[currentIndex].type === "video" ? (
                  <iframe
                    src={project.media[currentIndex].url}
                    className="w-full h-full border-0"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img 
                    src={project.media[currentIndex].url} 
                    className="w-full h-full object-cover"
                    alt="Project media"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {project.media.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  idx === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Описание и Ссылки */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 text-slate-300 text-lg leading-relaxed whitespace-pre-line">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-white">
            <Layers size={22} className="text-blue-500" /> Описание
          </h2>
          {project.fullDescription}
        </div>

        <div className="p-6 glass h-fit sticky top-24">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Доступы</h3>
          <div className="flex flex-col gap-3">
            {!project.private ? (
              <a href={project.github} target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all">
                <GitBranch size={20} /> GitHub
              </a>
            ) : (
              <div className="px-6 py-3 bg-slate-800 text-slate-500 rounded-xl text-center text-sm border border-white/5">Приватный код</div>
            )}
            <a href={project.live} target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 glass hover:bg-white/5 rounded-xl transition-all font-medium">
              <ExternalLink size={18} /> Live Preview
            </a>
          </div>
        </div>
      </section>

      {/* Код */}
      {project.code && (
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">Code Snippet</h2>
          <CodeBlock code={project.code} language={project.lang} />
        </section>
      )}

      <footer className="pt-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© 2026 Developed by failway.</p>
      </footer>
    </main>
  );
}