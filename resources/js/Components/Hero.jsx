import React from 'react';

export default function Hero() {
    return (
        <section className="pt-24 pb-20 md:pt-36 md:pb-28">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Status Indicator */}
                <div className="animate-enter-1 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-xs font-mono mb-8 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Available for software engineering roles
                </div>

                {/* Primary Heading */}
                <h1 className="animate-enter-2 text-4xl sm:text-6xl font-medium tracking-tight text-zinc-100 leading-[1.15]">
                    Jian Ross Dela Rosa
                </h1>
                
                <p className="animate-enter-2 mt-3 text-xl sm:text-2xl text-zinc-400 font-light tracking-tight">
                    Software developer focused on systems analysis, full-stack applications, and performant tools.
                </p>

                {/* Short Bio */}
                <p className="animate-enter-3 mt-6 text-base text-zinc-400 max-w-2xl leading-relaxed">
                    Graduating Computer Science student building robust software solutions. Experienced in desktop architectures, database optimization, and user-centered web applications.
                </p>

                {/* Direct CTA */}
                <div className="animate-enter-4 mt-8 flex flex-wrap items-center gap-4">
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-xs font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <span>View Projects</span>
                        <span className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
                    </a>
                    
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=jiandelarosa806@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <span>Get in Touch</span>
                        <span className="text-zinc-500">↗</span>
                    </a>
                </div>

            </div>
        </section>
    );
}