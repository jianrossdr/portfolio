import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth, projects = [] }) {
    const [editingProject, setEditingProject] = useState(null);

    // Create Form
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        tech_stack: '',
        github_url: '',
        live_url: '',
        image: null,
    });

    // Edit Form
    const editForm = useForm({
        title: '',
        description: '',
        tech_stack: '',
        github_url: '',
        live_url: '',
        image: null,
    });

    const submitCreate = (e) => {
        e.preventDefault();
        post('/projects', {
            onSuccess: () => reset(),
            forceFormData: true,
        });
    };

    const startEditing = (project) => {
        setEditingProject(project);
        editForm.setData({
            title: project.title,
            description: project.description,
            tech_stack: project.tech_stack,
            github_url: project.github_url || '',
            live_url: project.live_url || '',
            image: null,
        });
    };

    const submitUpdate = (e) => {
        e.preventDefault();
        editForm.post(`/projects/${editingProject.id}`, {
            onSuccess: () => setEditingProject(null),
            forceFormData: true,
        });
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(`/projects/${id}`);
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold tracking-tight text-white">
                    Project Management Dashboard
                </h2>
            }
        >
            <Head title="Dashboard - Projects" />

            <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    
                    {/* Add Project Card */}
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-xl">
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-white tracking-tight">Add New Project / Screenshot</h3>
                            <p className="text-xs text-slate-400 mt-1">Upload work to display on your public portfolio.</p>
                        </div>

                        <form onSubmit={submitCreate} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                                        Project Title
                                    </label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        placeholder="e.g. Reservation System (GUI w/ SQL)"
                                        className="w-full rounded-lg border-slate-800 bg-slate-950 text-slate-100 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    />
                                    {errors.title && <p className="text-rose-400 text-xs mt-1">{errors.title}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                                        Tech Stack (comma-separated)
                                    </label>
                                    <input
                                        type="text"
                                        value={data.tech_stack}
                                        onChange={(e) => setData('tech_stack', e.target.value)}
                                        placeholder="e.g. Java, SQL, Swing"
                                        className="w-full rounded-lg border-slate-800 bg-slate-950 text-slate-100 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    />
                                    {errors.tech_stack && <p className="text-rose-400 text-xs mt-1">{errors.tech_stack}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                                    Description
                                </label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    rows="3"
                                    placeholder="Describe features, system architecture, or core data structures used..."
                                    className="w-full rounded-lg border-slate-800 bg-slate-950 text-slate-100 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                />
                                {errors.description && <p className="text-rose-400 text-xs mt-1">{errors.description}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                                    Screenshot / Project Photo
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setData('image', e.target.files[0])}
                                    className="w-full text-sm text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-indigo-400 hover:file:bg-slate-700 cursor-pointer"
                                />
                                {errors.image && <p className="text-rose-400 text-xs mt-1">{errors.image}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-lg shadow-lg shadow-indigo-600/20 transition-all disabled:opacity-50"
                            >
                                {processing ? 'Saving...' : 'Publish Project'}
                            </button>
                        </form>
                    </div>

                    {/* Manage Existing Projects */}
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-xl">
                        <div className="mb-6 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold text-white tracking-tight">Active Projects</h3>
                                <p className="text-xs text-slate-400 mt-1">{projects.length} project(s) recorded in database</p>
                            </div>
                        </div>

                        {projects.length === 0 ? (
                            <p className="text-slate-500 text-sm">No projects found.</p>
                        ) : (
                            <div className="divide-y divide-slate-800/80">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            {proj.image_path ? (
                                                <img
                                                    src={`/storage/${proj.image_path}`}
                                                    alt={proj.title}
                                                    className="w-20 h-14 object-cover rounded-lg border border-slate-800 bg-slate-950 flex-shrink-0"
                                                />
                                            ) : (
                                                <div className="w-20 h-14 bg-slate-950 text-slate-600 text-[10px] uppercase font-mono flex items-center justify-center rounded-lg border border-slate-800 flex-shrink-0">
                                                    No Image
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="font-semibold text-white text-sm">{proj.title}</h4>
                                                <p className="text-xs text-slate-400 mt-0.5">{proj.tech_stack}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 self-end sm:self-center">
                                            <button
                                                type="button"
                                                onClick={() => startEditing(proj)}
                                                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-indigo-400 border border-slate-700 rounded-lg text-xs font-semibold transition-all"
                                            >
                                                Edit / Upload Photo
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDelete(proj.id)}
                                                className="px-3 py-1.5 bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 border border-rose-900/40 rounded-lg text-xs font-semibold transition-all"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Edit Project Modal */}
            {editingProject && (
                <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 space-y-5 shadow-2xl">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                            <h3 className="text-lg font-bold text-white tracking-tight">Edit Project: {editingProject.title}</h3>
                            <button 
                                onClick={() => setEditingProject(null)}
                                className="text-slate-400 hover:text-white text-lg font-bold"
                            >
                                &times;
                            </button>
                        </div>

                        <form onSubmit={submitUpdate} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        value={editForm.data.title}
                                        onChange={(e) => editForm.setData('title', e.target.value)}
                                        className="w-full rounded-lg border-slate-800 bg-slate-950 text-slate-100 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                                        Tech Stack
                                    </label>
                                    <input
                                        type="text"
                                        value={editForm.data.tech_stack}
                                        onChange={(e) => editForm.setData('tech_stack', e.target.value)}
                                        className="w-full rounded-lg border-slate-800 bg-slate-950 text-slate-100 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                                    Description
                                </label>
                                <textarea
                                    value={editForm.data.description}
                                    onChange={(e) => editForm.setData('description', e.target.value)}
                                    rows="3"
                                    className="w-full rounded-lg border-slate-800 bg-slate-950 text-slate-100 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                                    Replace Screenshot / Photo
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => editForm.setData('image', e.target.files[0])}
                                    className="w-full text-sm text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-indigo-400 hover:file:bg-slate-700 cursor-pointer"
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                                <button
                                    type="button"
                                    onClick={() => setEditingProject(null)}
                                    className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg hover:bg-slate-700 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={editForm.processing}
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg shadow-lg shadow-indigo-600/20 transition-all"
                                >
                                    {editForm.processing ? 'Updating...' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}