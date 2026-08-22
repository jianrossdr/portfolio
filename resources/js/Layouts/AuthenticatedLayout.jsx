import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500 selection:text-white">
            {/* Top Navigation Bar */}
            <nav className="border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between items-center">
                        <div className="flex items-center gap-8">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2">
                                <span className="text-xl font-bold tracking-tight text-white">
                                    Dev<span className="text-indigo-400">Portfolio</span>
                                </span>
                            </Link>

                            {/* Nav Links */}
                            <div className="hidden space-x-4 sm:flex">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                        route().current('dashboard')
                                            ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                                    }`}
                                >
                                    Dashboard
                                </NavLink>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all"
                                >
                                    View Live Site ↗
                                </a>
                            </div>
                        </div>

                        {/* User Settings Dropdown */}
                        <div className="hidden sm:flex sm:items-center">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-all focus:outline-none"
                                    >
                                        <span>{user.name}</span>
                                        <svg className="h-4 w-4 fill-current text-slate-500" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </Dropdown.Trigger>

                                <Dropdown.Content contentClasses="py-1 bg-slate-900 border border-slate-800 shadow-xl rounded-lg">
                                    <Dropdown.Link
                                        href={route('profile.edit')}
                                        className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-white"
                                    >
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="block w-full text-left px-4 py-2 text-xs text-rose-400 hover:bg-rose-950/40 hover:text-rose-300"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>

                        {/* Mobile Hamburger */}
                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((prev) => !prev)}
                                className="p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2'}>
                    <ResponsiveNavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                        className="text-slate-300 hover:text-white"
                    >
                        Dashboard
                    </ResponsiveNavLink>
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="block px-3 py-2 text-sm text-slate-400 hover:text-white"
                    >
                        View Live Site ↗
                    </a>
                    <div className="border-t border-slate-800 pt-3 mt-2">
                        <div className="text-xs text-slate-400 px-3">{user.name} ({user.email})</div>
                        <ResponsiveNavLink href={route('profile.edit')} className="text-slate-300 hover:text-white text-xs">
                            Profile
                        </ResponsiveNavLink>
                        <ResponsiveNavLink method="post" href={route('logout')} as="button" className="text-rose-400 hover:text-rose-300 text-xs">
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>

            {/* Page Sub-Header Banner */}
            {header && (
                <header className="bg-slate-900/60 border-b border-slate-800/80">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            {/* Page Content */}
            <main>{children}</main>
        </div>
    );
}