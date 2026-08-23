import React from 'react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28">
            
            {/* 1. Animated Ambient Gradient Orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/35 via-purple-600/20 to-pink-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow -z-10" />
            
            {/* 2. Floating Geometric Decorative Elements */}
            <div className="absolute top-20 left-[12%] w-24 h-24 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm pointer-events-none animate-float-slow -z-10 hidden md:block" />
            <div className="absolute top-36 right-[14%] w-20 h-20 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm pointer-events-none animate-float-reverse -z-10 hidden md:block" />

            {/* 3. Subtle Animated Background Grid */}
            <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,#33415518_1px,transparent_1px),linear-gradient(to_bottom,#33415518_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
            />

            <div className="relative max-w-5xl mx-auto px-6 text-center">
                
                {/* 4. Availability Badge with Pulsing Aura */}
                <div className="animate-fade-in-down inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8 backdrop-blur-md shadow-lg shadow-emerald-500/5 transition-transform hover:scale-105 duration-300">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Available for Software & Systems Roles</span>
                </div>

                {/* 5. Main Heading with Animated Shimmering Gradient */}
                <h1 className="animate-fade-in-up-1 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
                    Engineering reliable software & <br className="hidden sm:inline" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 via-pink-300 to-indigo-400 animate-gradient-flow">
                        multidisciplinary architectures.
                    </span>
                </h1>

                {/* 6. Bio / Value Proposition */}
                <p className="animate-fade-in-up-2 mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Hi, I'm <span className="font-semibold text-white">Jian Ross Dela Rosa</span>. A graduating Computer Science student specializing in system analysis, versatile application development, and user-centered digital experiences.
                </p>

                {/* 7. High-Impact Single CTA Button with Laser Shimmer Border */}
                <div className="animate-fade-in-up-3 mt-10 flex justify-center">
                    <a
                        href="#projects"
                        className="relative inline-flex items-center justify-center p-[1.5px] rounded-2xl overflow-hidden group shadow-xl shadow-indigo-600/20 transition-transform duration-300 hover:-translate-y-1 active:translate-y-0"
                    >
                        {/* Spinning Laser Gradient Border */}
                        <span className="absolute inset-[-1000%] animate-laser-spin bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#c084fc_50%,#4f46e5_100%)] opacity-70 group-hover:opacity-100 transition-opacity" />
                        
                        {/* Button Surface */}
                        <span className="relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-slate-950/90 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-slate-900/80 backdrop-blur-xl">
                            <span>Explore Projects & Case Studies</span>
                            <svg 
                                className="w-4 h-4 text-indigo-400 transition-transform duration-300 group-hover:translate-y-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </span>
                    </a>
                </div>

            </div>
        </section>
    );
}