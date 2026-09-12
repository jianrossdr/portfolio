import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Hero from '@/Components/Hero';

export default function Welcome({ projects = [] }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('jiandelarosa806@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    // Scroll reading progress listener
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (windowHeight > 0) {
                setScrollProgress((totalScroll / windowHeight) * 100);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll reveal observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.reveal-item').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [projects]);

    // Modal escape key listener
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const skillGroups = [
        {
            category: 'Languages & Core',
            items: ['Java', 'C# / .NET', 'Python', 'PHP', 'JavaScript (ES6+)', 'SQL']
        },
        {
            category: 'Frameworks & Web',
            items: ['HTML', 'Laravel', 'React', 'Inertia.js', 'Tailwind CSS', 'REST APIs']
        },
        {
            category: 'Systems & Data',
            items: ['MySQL', 'Data Structures', 'System Analysis', 'Git', 'Hardware Telemetry']
        },
        {
            category: '3D & Design',
            items: ['Figma UI/UX', '3ds Max', 'Unreal Engine', 'Prototyping']
        }
    ];

    return (
        <>
            <Head title="Jian Ross Dela Rosa — Software Developer" />

            <div className="min-h-screen bg-[#09090b] text-zinc-200 font-sans selection:bg-zinc-700 selection:text-white">

                {/* Navbar with Reading Progress Indicator */}
                <header className="border-b border-zinc-800/80 sticky top-0 bg-[#09090b]/85 backdrop-blur-md z-30 transition-all">
                    <div className="max-w-4xl mx-auto px-6 h-14 flex justify-between items-center">
                        <a href="#" className="text-xs font-mono font-semibold tracking-wider text-zinc-300 hover:text-white transition-colors">
                            JIAN.DEV
                        </a>

                        <nav className="flex items-center gap-5 text-xs font-medium text-zinc-400">
                            <a href="#projects" className="hover:text-zinc-100 transition-colors">Projects</a>
                            <a href="#skills" className="hover:text-zinc-100 transition-colors">Toolkit</a>
                            <a href="#contact" className="hover:text-zinc-100 transition-colors">Contact</a>
                        </nav>
                    </div>

                    {/* Subtle Top Scroll Progress Bar */}
                    <div className="w-full bg-transparent h-[1.5px]">
                        <div
                            className="h-[1.5px] bg-zinc-400/80 transition-all duration-150 ease-out"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>
                </header>

                <main className="divide-y divide-zinc-800/60">

                    {/* Hero */}
                    <Hero />

                    {/* Featured Projects */}
                    <section id="projects" className="py-20 scroll-mt-14">
                        <div className="max-w-4xl mx-auto px-6">

                            <div className="reveal-item flex items-baseline justify-between mb-10">
                                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                                    Selected Projects
                                </h2>
                                <span className="text-xs text-zinc-500 font-mono">
                                    {projects.length} Works
                                </span>
                            </div>

                            {(!projects || projects.length === 0) ? (
                                <div className="reveal-item p-8 rounded-xl border border-zinc-800 text-center text-xs text-zinc-500">
                                    No projects published yet. Add via dashboard.
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {projects.map((project, idx) => (
                                        <div
                                            key={project.id}
                                            style={{ transitionDelay: `${idx * 60}ms` }}
                                            className="reveal-item clean-card rounded-xl p-6 sm:p-7 flex flex-col md:flex-row gap-6 justify-between items-start group"
                                        >
                                            <div className="space-y-3 flex-1">
                                                <div className="flex items-center gap-2.5">
                                                    <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                                                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                                                        {project.title}
                                                    </h3>
                                                </div>

                                                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-1.5 pt-2">
                                                    {(project.tech_stack || '').split(',').map((tech, tIdx) => (
                                                        <span
                                                            key={tIdx}
                                                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800/90 text-zinc-400 group-hover:border-zinc-700 transition-colors"
                                                        >
                                                            {tech.trim()}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {project.image_path && (
                                                <button
                                                    onClick={() => setSelectedImage({
                                                        src: `/project-images/${project.image_path}`,
                                                        title: project.title,
                                                        tech: project.tech_stack
                                                    })}
                                                    className="w-full md:w-44 h-28 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 flex-shrink-0 group/img relative cursor-pointer"
                                                >
                                                    <img
                                                        src={`/project-images/${project.image_path}`}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover object-top opacity-75 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500 ease-out"
                                                    />

                                                    {/* Shimmer Effect */}
                                                    <div className="shimmer-sweep" />

                                                    <span className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center text-[10px] font-mono text-zinc-200 transition-opacity duration-200">
                                                        Preview ↗
                                                    </span>
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </section>

                    {/* Toolkit Section */}
                    <section id="skills" className="py-20 scroll-mt-14">
                        <div className="max-w-4xl mx-auto px-6">

                            <h2 className="reveal-item text-xs font-mono uppercase tracking-widest text-zinc-400 mb-10">
                                Technical Proficiencies
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                {skillGroups.map((group, idx) => (
                                    <div
                                        key={idx}
                                        style={{ transitionDelay: `${idx * 60}ms` }}
                                        className="reveal-item space-y-3 p-4 rounded-xl border border-transparent hover:border-zinc-800/80 hover:bg-zinc-900/30 transition-all duration-300"
                                    >
                                        <h3 className="text-xs font-semibold text-zinc-200 border-b border-zinc-800/80 pb-2">
                                            {group.category}
                                        </h3>
                                        <ul className="space-y-1.5 text-xs text-zinc-400">
                                            {group.items.map((skill, sIdx) => (
                                                <li key={sIdx} className="hover:text-zinc-200 transition-colors duration-150 cursor-default">
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </section>

                    {/* Connect Section */}
                    <section id="contact" className="py-24 scroll-mt-14 relative">
                        <div className="max-w-4xl mx-auto px-6">

                            {/* Header with Location & Availability Status */}
                            <div className="reveal-item flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                                <div>
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                                        Get in Touch
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-100 mt-2">
                                        Let's discuss new opportunities.
                                    </h2>
                                </div>

                                {/* Timezone / Availability Pill */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-400 w-fit">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>PH (UTC+8) • Replies within 24h</span>
                                </div>
                            </div>

                            {/* Interactive Contact Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                {/* 1. Direct Email Card with Quick Copy */}
                                <div className="reveal-item clean-card rounded-xl p-5 flex flex-col justify-between group">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-mono text-zinc-400">Primary Channel</span>
                                            <button
                                                onClick={handleCopyEmail}
                                                className="text-[11px] font-mono px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                                            >
                                                {copied ? '✓ Copied!' : 'Copy Address'}
                                            </button>
                                        </div>
                                        <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                                            Direct Email
                                        </h3>
                                        <p className="text-xs font-mono text-zinc-400 mt-1">
                                            jiandelarosa806@gmail.com
                                        </p>
                                    </div>

                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=jiandelarosa806@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 group-hover:text-white transition-colors"
                                    >
                                        <span>Open in Webmail</span>
                                        <span className="text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                                    </a>
                                </div>

                                {/* 2. LinkedIn Card */}
                                <a
                                    href="https://linkedin.com/in/jian-ross-dela-rosa-ab04bb351/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="reveal-item clean-card rounded-xl p-5 flex flex-col justify-between group cursor-pointer"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-mono text-zinc-400">Professional Network</span>
                                            <span className="text-xs text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                                        </div>
                                        <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                                            LinkedIn Profile
                                        </h3>
                                        <p className="text-xs text-zinc-400 mt-1">
                                            Professional milestones, background & endorsements
                                        </p>
                                    </div>

                                    <div className="mt-6 text-xs font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                        in/jian-ross-dela-rosa
                                    </div>
                                </a>

                                {/* 3. GitHub Card */}
                                <a
                                    href="https://github.com/jianrossdr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="reveal-item clean-card rounded-xl p-5 flex flex-col justify-between group cursor-pointer"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-mono text-zinc-400">Code Repositories</span>
                                            <span className="text-xs text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                                        </div>
                                        <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                                            GitHub Profile
                                        </h3>
                                        <p className="text-xs text-zinc-400 mt-1">
                                            Source code, system architectures & scripts
                                        </p>
                                    </div>

                                    <div className="mt-6 text-xs font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                        github.com/jianrossdr
                                    </div>
                                </a>

                            </div>

                        </div>
                    </section>

                </main>

                {/* Footer */}
                <footer className="border-t border-zinc-800/80 py-8 text-center text-xs font-mono text-zinc-600">
                    &copy; {new Date().getFullYear()} Jian Ross Dela Rosa.
                </footer>

            </div>

            {/* Lightbox Modal with Smooth Scale-in */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 transition-all"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl animate-enter-1"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-zinc-950">
                            <div>
                                <h3 className="text-xs font-medium text-zinc-200">{selectedImage.title}</h3>
                                <p className="text-[10px] font-mono text-zinc-500">{selectedImage.tech}</p>
                            </div>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="text-xs font-mono text-zinc-400 hover:text-white px-2 py-1 transition-colors"
                            >
                                [close]
                            </button>
                        </div>
                        <div className="p-2 bg-black flex justify-center max-h-[75vh] overflow-auto">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[70vh] object-contain rounded"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
