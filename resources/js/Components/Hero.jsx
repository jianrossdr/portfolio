import React from 'react';

export default function Hero() {
    return (
        <section className="pt-24 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
            
            {/* Subtle Ambient Radial Highlight */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-zinc-800/20 blur-[130px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto px-6">

                <img
                    src="/profile.jpg"
                    alt="Jian Ross Dela Rosa"
                    width="144"
                    height="144"
                    className="animate-enter-1 mb-8 h-32 w-32 rounded-full border-2 border-zinc-700 object-cover object-top shadow-xl shadow-black/30 sm:h-36 sm:w-36"
                />
                
                {/* 1. Status Indicator with Interactive Hover */}
                <div className="animate-enter-1 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-800/90 bg-zinc-900/60 text-zinc-300 text-xs font-mono mb-8 backdrop-blur-md transition-all duration-300 hover:border-zinc-700 hover:scale-[1.02]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 pulse-dot" />
                    </span>
                    Full-Stack Software Developer | Available for Full-Time Opportunities
                </div>

                {/* 2. Main Name Heading */}
                <h1 className="animate-enter-2 text-4xl sm:text-6xl font-medium tracking-tight text-zinc-100 leading-[1.12]">
                    Jian Ross Dela Rosa
                </h1>

                {/* 3. Refined Bio */}
                <p className="animate-enter-3 mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
                    Full-stack software developer building reliable, user-focused web and desktop applications.
                </p>

                {/* 4. Interactive Action Buttons */}
                <div className="animate-enter-4 mt-8 flex flex-wrap items-center gap-4">
                
                    
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=jiandelarosa806@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                    >
                        <span>Get in Touch</span>
                        <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">↗</span>
                    </a>
                </div>

            </div>
        </section>
    );
}