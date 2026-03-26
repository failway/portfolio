"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Code2 } from "lucide-react";

interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({ project, index }: { project: Project, index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass overflow-hidden group relative flex flex-col h-full border border-white/5 shadow-2xl"
    >
      <div className="h-56 w-full relative overflow-hidden bg-slate-900 flex items-center justify-center">
        {(!project.image || imgError) ? (
          <div className="flex flex-col items-center justify-center text-slate-700 group-hover:text-blue-500/40 transition-colors duration-500">
            <Code2 size={48} strokeWidth={1} />
            <span className="text-[10px] uppercase mt-2 tracking-widest font-bold opacity-50">No Preview</span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          </div>
        ) : (
          <Image
            src={project.image.startsWith('/') ? project.image : `/${project.image}`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span 
              key={tag} 
              className="text-[10px] px-2 py-1 bg-blue-500/10 text-blue-300 rounded border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link 
          href={`/projects/${project.id}`} 
          className="text-blue-400 text-sm font-bold flex items-center group/link hover:text-blue-300 transition-colors"
        >
          Подробнее 
          <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
}