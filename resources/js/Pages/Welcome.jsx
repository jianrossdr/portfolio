import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Welcome({ auth, projects = [] }) {
    const [selectedImage, setSelectedImage] = useState(null);

    // Keyboard shortcut to close lightbox modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const skillCategories = [
        {
            title: 'Software & Systems',
            icon: '⚡',
            skills: ['Java', 'C# / .NET', 'Python', 'Data Structures (FIFO, HashMaps)', 'SQL CRUD Workflows']
        },
        {
            title: 'Web & Frameworks',
            icon: '🌐',
            skills: ['PHP', 'Laravel', 'React', 'Inertia.js', 'Tailwind CSS', 'JavaScript']
        },
        {
            title: '3D, UI/UX & Graphics',
            icon: '🎨',
            skills: ['Figma Prototyping', '3ds Max Modeling & Lighting', 'Unreal Engine 3D Logic']
        },
        {
            title: 'Hardware & Systems Analysis',
            icon: '⚙️',
            skills: ['IoT Power Telemetry', 'Database Optimization', 'Git', 'System Workflow Mapping']
        }
    ];

    return (
        <>
            <Head title="Jian | Software Developer & Systems Portfolio" />

            <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden scroll-smooth">
                
                {/* Background Atmospheric Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />
                <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 blur-[160px] pointer-events-none -z-10" />

                {/* Sticky Navbar */}
                <header className="border-b border-slate-800/60 sticky top-0 bg-slate-950/70 backdrop-blur-xl z-30 transition-all">
                    <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
                        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white hover:opacity-90 transition-opacity">
                            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm shadow-md shadow-indigo-500/20">
                                J
                            </span>
                            <span>Dev<span className="text-indigo-400">Portfolio</span></span>
                        </a>

                        <nav className="flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
                            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
                            <a href="#skills" className="hover:text-indigo-400 transition-colors">Toolkit</a>
                            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
                            <a 
                                href="/resume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 hover:bg-indigo-900/70 transition-all"
                            >
                                Resume ↗
                            </a>
                            {auth?.user ? (
                                <Link 
                                    href="/dashboard" 
                                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all text-xs font-semibold shadow-md shadow-indigo-600/30"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link 
                                    href="/login" 
                                    className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all text-xs font-semibold"
                                >
                                    Admin Login
                                </Link>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center relative">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-indigo-300 bg-indigo-950/60 border border-indigo-800/80 rounded-full mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Available for Software & Systems Roles
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                        Engineering reliable software & <br className="hidden sm:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200">
                            multidisciplinary architectures.
                        </span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Computer Science developer experienced in desktop software workflows, data structure optimization, IoT hardware telemetry, and interactive 3D simulations.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <a 
                            href="#projects" 
                            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all text-sm flex items-center gap-2"
                        >
                            View Case Studies &darr;
                        </a>
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold transition-all text-sm flex items-center gap-2 backdrop-blur-sm"
                        >
                            Download Resume (PDF) ↗
                        </a>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Portfolio Work</span>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">Featured Systems & Projects</h2>
                        </div>
                        <p className="text-slate-400 text-xs sm:text-sm max-w-sm">
                            Click any project preview to inspect high-resolution architecture diagrams and interface screenshots.
                        </p>
                    </div>

                    {(!projects || projects.length === 0) ? (
                        <div className="p-12 rounded-2xl bg-slate-900/50 border border-slate-800 text-center text-slate-400">
                            No projects seeded yet. Add them through the dashboard.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <div 
                                    key={project.id} 
                                    className="bg-slate-900/60 border border-slate-800/80 rounded-2xl hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-indigo-500/5 transition-all flex flex-col justify-between overflow-hidden group"
                                >
                                    {/* Lightbox Trigger Area */}
                                    {project.image_path ? (
                                        <div 
                                            className="relative h-52 w-full overflow-hidden bg-slate-950/80 border-b border-slate-800/80 cursor-pointer group"
                                            onClick={() => setSelectedImage({
                                                src: `/storage/${project.image_path}`,
                                                title: project.title,
                                                tech: project.tech_stack
                                            })}
                                        >
                                            <img 
                                                src={`/storage/${project.image_path}`} 
                                                alt={project.title} 
                                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-medium backdrop-blur-[2px]">
                                                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                                Expand Screenshot
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="h-32 w-full bg-slate-950/40 border-b border-slate-800/80 flex items-center justify-center">
                                            <span className="text-[11px] font-mono text-slate-600 uppercase tracking-wider">Interface Preview</span>
                                        </div>
                                    )}

                                    {/* Body */}
                                    <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="mt-2.5 text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-4">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-slate-800/80">
                                            <div className="flex flex-wrap gap-1.5">
                                                {(project.tech_stack || '').split(',').map((tech, idx) => (
                                                    <span 
                                                        key={idx} 
                                                        className="px-2 py-0.5 text-[11px] font-mono bg-slate-950 text-indigo-300 border border-slate-800 rounded-md"
                                                    >
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Technical Toolkit Grid */}
                <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Proficiencies</span>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">Technical Stack & Domain Skills</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
                                <div>
                                    <div className="text-2xl mb-3">{category.icon}</div>
                                    <h4 className="font-bold text-white text-sm">{category.title}</h4>
                                    <ul className="mt-4 space-y-2">
                                        {category.skills.map((skill, sIdx) => (
                                            <li key={sIdx} className="text-xs text-slate-400 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact & Social Links Section */}
                <section id="contact" className="max-w-4xl mx-auto px-6 py-24 border-t border-slate-800/60 text-center">
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 border border-indigo-800/80 px-3.5 py-1.5 rounded-full">
                        Let's Connect
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-5">
                        Open for Software Opportunities
                    </h2>
                    <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto leading-relaxed">
                        Feel free to reach out directly for full-time opportunities, technical consultations, or project inquiries.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:your.email@example.com"
                            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            Direct Email
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-xs transition-all flex items-center gap-2"
                        >
                            GitHub Profile ↗
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-xs transition-all flex items-center gap-2"
                        >
                            LinkedIn Profile ↗
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-slate-800/60 py-8 text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} Software Development Portfolio. Built with Laravel, React & Inertia.js.
                </footer>
            </div>

            {/* Expanded Image Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <div 
                        className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
                            <div>
                                <h3 className="text-sm font-bold text-white tracking-tight">{selectedImage.title}</h3>
                                <p className="text-xs text-slate-400 font-mono mt-0.5">{selectedImage.tech}</p>
                            </div>
                            <button 
                                onClick={() => setSelectedImage(null)}
                                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-lg text-xs font-semibold border border-slate-700 transition-all"
                            >
                                Esc ✕
                            </button>
                        </div>

                        <div className="bg-slate-950 p-3 sm:p-6 flex items-center justify-center max-h-[75vh] overflow-auto">
                            <img 
                                src={selectedImage.src} 
                                alt={selectedImage.title} 
                                className="max-w-full max-h-[70vh] rounded-lg object-contain border border-slate-800/80 shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}