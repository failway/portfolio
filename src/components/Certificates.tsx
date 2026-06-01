"use client";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Award, ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  { id: "mts", src: "/portfolio/sert/mts.jpg", title: "МТС True Tech Champ" },
  { id: "vtb", src: "/portfolio/sert/vtb.jpg", title: "VTB API Hackathon" },
  { id: "braim", src: "/portfolio/sert/braim.jpg", title: "IT-Планета" },
  { id: "yc2024", src: "/portfolio/sert/yc2024.jpg", title: "Yandex Cup 2024" },
  { id: "yc2025", src: "/portfolio/sert/yc2025.png", title: "Yandex Cup 2025" },
];

export default function Certificates() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const certParam = searchParams.get("cert");
  const selectedIndex = certParam
    ? certificates.findIndex((c) => c.id === certParam)
    : -1;

  const routerRef = useRef(router);
  useEffect(() => { routerRef.current = router; }, [router]);

  const openModal = (index: number) => {
    router.push(`?cert=${certificates[index].id}`, { scroll: false });
  };

    const closeModal = () => {
    router.push("/", { scroll: false });
    };
  const prev = () => {
    const param = new URLSearchParams(window.location.search).get("cert");
    const idx = param ? certificates.findIndex((c) => c.id === param) : -1;
    if (idx < 0) return;
    const newIndex = (idx - 1 + certificates.length) % certificates.length;
    routerRef.current.push(`?cert=${certificates[newIndex].id}`, { scroll: false });
  };

  const next = () => {
    const param = new URLSearchParams(window.location.search).get("cert");
    const idx = param ? certificates.findIndex((c) => c.id === param) : -1;
    if (idx < 0) return;
    const newIndex = (idx + 1) % certificates.length;
    routerRef.current.push(`?cert=${certificates[newIndex].id}`, { scroll: false });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") routerRef.current.push("/", { scroll: false });
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const copyLink = () => {
    if (selectedIndex < 0) return;
    const url = `${window.location.origin}/portfolio?cert=${certificates[selectedIndex].id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <section id="certificates" className="mt-32 scroll-mt-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-4xl font-bold mb-12 text-gradient italic"
      >
        Сертификаты
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => openModal(index)}
            className="glass overflow-hidden group relative flex flex-col cursor-pointer border border-white/5 shadow-2xl"
          >
            <div className="h-56 w-full relative overflow-hidden bg-slate-900 flex items-center justify-center">
              <Image
                src={cert.src}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-bold tracking-widest uppercase border border-white/30 px-4 py-2 rounded backdrop-blur-sm">
                  Открыть
                </span>
              </div>
            </div>

            <div className="p-5 flex items-center gap-3">
              <Award size={18} className="text-blue-400 shrink-0" />
              <span className="text-slate-300 text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">
                {cert.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-3xl w-full glass border border-white/10 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={certificates[selectedIndex].src}
                  alt={certificates[selectedIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <div className="p-4 flex items-center justify-between border-t border-white/10">
                <span className="text-slate-400 text-sm flex items-center gap-2">
                  <Award size={16} className="text-blue-400" />
                  {certificates[selectedIndex].title}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={copyLink}
                    className="text-xs text-slate-500 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 border border-white/10 px-3 py-1 rounded-full hover:border-blue-500/30"
                  >
                    🔗 Скопировать ссылку
                  </button>
                  <span className="text-slate-600 text-xs">
                    {selectedIndex + 1} / {certificates.length}
                  </span>
                </div>
              </div>

              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-blue-500/30 border border-white/10 rounded-full transition-colors duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-blue-500/30 border border-white/10 rounded-full transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </button>

              <button
                onClick={closeModal}
                className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-red-500/30 border border-white/10 rounded-full transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}