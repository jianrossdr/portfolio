import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Hero from '@/Components/Hero';

export default function Welcome({ auth, projects = [] }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeSection, setActiveSection] = useState('');

    // 1. Intersection Observer for Scroll Reveals & Active Navbar Link
    useEffect(() => {
        // Reveal elements on scroll
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        document.querySelectorAll('.reveal-init').forEach((el) => {
            revealObserver.observe(el);
        });

        // Track active section for navbar indicator
        const handleScroll = () => {
            const sections = ['projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            revealObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [projects]);

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
        title: 'Core Systems & Backend',
        description: 'Object-oriented architectures, algorithmic workflows, and backend services.',
        icon: (
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        accent: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
        badgeColor: 'border-indigo-500/30 text-indigo-300 bg-indigo-950/40',
        skills: [
            { name: 'Java', tag: 'Core' },
            { name: 'C# / .NET', tag: 'Desktop' },
            { name: 'Python', tag: 'Scripts' },
            { name: 'PHP / Laravel', tag: 'Backend' },
            { name: 'Data Structures', tag: 'Algorithms' },
            { name: 'RESTful APIs', tag: 'Integration' }
        ]
    },
    {
        title: 'Web & UI Engineering',
        description: 'Modern reactive interfaces, state-driven rendering, and atomic styling.',
        icon: (
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        accent: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
        badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-950/40',
        skills: [
            { name: 'React', tag: 'SPA' },
            { name: 'Inertia.js', tag: 'Routing' },
            { name: 'Tailwind CSS', tag: 'Styling' },
            { name: 'JavaScript (ES6+)', tag: 'Client' },
            { name: 'HTML5 / CSS3', tag: 'Semantics' },
            { name: 'Responsive Layouts', tag: 'Design' }
        ]
    },
    {
        title: '3D, UI/UX & Digital Prototyping',
        description: 'Spatial visual assets, realistic lighting, and interactive prototyping.',
        icon: (
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
        ),
        accent: 'from-purple-500/20 via-purple-500/5 to-transparent',
        badgeColor: 'border-purple-500/30 text-purple-300 bg-purple-950/40',
        skills: [
            { name: 'Figma', tag: 'UI / UX' },
            { name: '3ds Max', tag: 'Modeling' },
            { name: 'Unreal Engine', tag: '3D Logic' },
            { name: 'Wireframing', tag: 'Design' },
            { name: 'Design Systems', tag: 'Tokens' }
        ]
    },
    {
        title: 'Hardware, DB & Systems Analysis',
        description: 'Relational data management, hardware diagnostics, and workflow integrity.',
        icon: (
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        accent: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
        badgeColor: 'border-emerald-500/30 text-emerald-300 bg-emerald-950/40',
        skills: [
            { name: 'MySQL', tag: 'Queries & CRUD' },
            { name: 'Git & GitHub', tag: 'Version Control' },
            { name: 'System Analysis', tag: 'Workflows' },
            { name: 'Hardware Telemetry', tag: 'IoT' },
            { name: 'PC Diagnostics', tag: 'Troubleshooting' }
        ]
    }
];

    // Smooth scroll handler with visual feedback
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        <>
            <Head title="Jian | Software Developer & Systems Portfolio" />

            <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden scroll-smooth">
                
                {/* Background Atmospheric Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />
                <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 blur-[160px] pointer-events-none -z-10" />

                {/* Sticky Navbar with Active Indicator */}
                <header className="border-b border-slate-800/60 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-30 transition-all">
                    <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
                        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white hover:scale-105 active:scale-95 transition-all">
                            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm shadow-md shadow-indigo-500/20">
                                J
                            </span>
                            <span>Dev<span className="text-indigo-400">Portfolio</span></span>
                        </a>

                        <nav className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-slate-300">
                            <a 
                                href="#projects" 
                                onClick={(e) => scrollToSection(e, 'projects')}
                                className={`px-3 py-1.5 rounded-lg transition-all duration-200 active:scale-95 ${
                                    activeSection === 'projects' 
                                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30' 
                                        : 'hover:text-indigo-400 hover:bg-slate-900/50'
                                }`}
                            >
                                Projects
                            </a>
                            <a 
                                href="#skills" 
                                onClick={(e) => scrollToSection(e, 'skills')}
                                className={`px-3 py-1.5 rounded-lg transition-all duration-200 active:scale-95 ${
                                    activeSection === 'skills' 
                                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30' 
                                        : 'hover:text-indigo-400 hover:bg-slate-900/50'
                                }`}
                            >
                                Toolkit
                            </a>
                            <a 
                                href="#contact" 
                                onClick={(e) => scrollToSection(e, 'contact')}
                                className={`px-3 py-1.5 rounded-lg transition-all duration-200 active:scale-95 ${
                                    activeSection === 'contact' 
                                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30' 
                                        : 'hover:text-indigo-400 hover:bg-slate-900/50'
                                }`}
                            >
                                Contact
                            </a>
                            <a 
                                href="/resume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 hover:bg-indigo-900/70 hover:scale-105 active:scale-95 transition-all"
                            >
                                Resume ↗
                            </a>
                            {auth?.user ? (
                                <Link 
                                    href="/dashboard" 
                                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all text-xs font-semibold shadow-md shadow-indigo-600/30 hover:scale-105 active:scale-95"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link 
                                    href="/login" 
                                    className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all text-xs font-semibold hover:scale-105 active:scale-95"
                                >
                                    Admin Login
                                </Link>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <Hero />

                {/* Projects Section */}
                <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60 scroll-mt-16">
                    <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Portfolio Work</span>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">Featured Systems & Projects</h2>
                        </div>
                        <p className="text-slate-400 text-xs sm:text-sm max-w-sm">
                            Click any project preview to inspect high-resolution architecture diagrams and interface screenshots.
                        </p>
                    </div>

                    {(!projects || projects.length === 0) ? (
                        <div className="reveal-init p-12 rounded-2xl bg-slate-900/50 border border-slate-800 text-center text-slate-400">
                            No projects seeded yet. Add them through the dashboard.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project, index) => (
                                <div 
                                    key={project.id} 
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                    className="reveal-init card-glow bg-slate-900/60 border border-slate-800/80 rounded-2xl flex flex-col justify-between overflow-hidden group cursor-pointer"
                                >
                                    {/* Lightbox Trigger Preview */}
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
                                                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-xs font-medium backdrop-blur-sm">
                                                <svg className="w-4 h-4 text-indigo-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                                Expand Architecture Preview
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
                                                        className="px-2.5 py-0.5 text-[11px] font-mono bg-slate-950/90 text-indigo-300 border border-slate-800 rounded-md group-hover:border-indigo-500/30 transition-colors"
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
<section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-800/60 scroll-mt-16 relative">
    {/* Section Header */}
    <div className="reveal-init text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 border border-indigo-800/80 px-3.5 py-1.5 rounded-full shadow-sm">
            Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Specialized Skills & Stack
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-3">
            A comprehensive overview of programming languages, frameworks, system analysis tools, and design workflows I utilize.
        </p>
    </div>

    {/* Bento Skills Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
            <div 
                key={index} 
                style={{ transitionDelay: `${index * 100}ms` }}
                className="reveal-init relative group p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-1"
            >
                {/* Background Ambient Corner Glow */}
                <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-bl ${category.accent} blur-2xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700`} />

                <div>
                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-3.5 mb-3">
                        <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 shadow-inner group-hover:scale-110 group-hover:border-slate-700 transition-all duration-300">
                            {category.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-base tracking-tight group-hover:text-indigo-300 transition-colors">
                                {category.title}
                            </h3>
                            <span className="text-[11px] font-mono text-slate-500">Domain Proficiency</span>
                        </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                        {category.description}
                    </p>
                </div>

                {/* Skill Pills */}
                <div className="pt-4 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, sIdx) => (
                            <div 
                                key={sIdx}
                                className="group/pill inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all duration-200"
                            >
                                <span className="text-xs font-medium text-slate-200 group-hover/pill:text-white">
                                    {skill.name}
                                </span>
                                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md border ${category.badgeColor}`}>
                                    {skill.tag}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>

                {/* Contact Section */}
                <section id="contact" className="reveal-init max-w-4xl mx-auto px-6 py-24 border-t border-slate-800/60 text-center scroll-mt-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 border border-indigo-800/80 px-3.5 py-1.5 rounded-full shadow-sm">
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
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=jiandelarosa806@gmail.com"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-indigo-500/40 font-semibold text-xs transition-all flex items-center gap-2 hover:-translate-y-1 active:scale-95 shadow-md"
                            title="Send Email via Gmail"
                        >
                            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            Direct Email ↗
                        </a>
                        <a
                            href="https://github.com/jianrossdr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-indigo-500/40 font-semibold text-xs transition-all flex items-center gap-2 hover:-translate-y-1 active:scale-95 shadow-md"
                        >
                            GitHub Profile ↗
                        </a>
                        <a
                            href="https://linkedin.com/in/jian-ross-dela-rosa-ab04bb351/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-indigo-500/40 font-semibold text-xs transition-all flex items-center gap-2 hover:-translate-y-1 active:scale-95 shadow-md"
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

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div 
                        className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl scale-in-95 animate-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
                            <div>
                                <h3 className="text-sm font-bold text-white tracking-tight">{selectedImage.title}</h3>
                                <p className="text-xs text-slate-400 font-mono mt-0.5">{selectedImage.tech}</p>
                            </div>
                            <button 
                                onClick={() => setSelectedImage(null)}
                                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-lg text-xs font-semibold border border-slate-700 transition-all active:scale-90"
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