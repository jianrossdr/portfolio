<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tech_stack' => 'required|string|max:255',
            'github_url' => 'nullable|url',
            'live_url' => 'nullable|url',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:4096', // Max 4MB
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects', 'public');
            $validated['image_path'] = $path;
        }

        Project::create($validated);

        return redirect()->route('dashboard')->with('success', 'Project added successfully!');
    }

    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tech_stack' => 'required|string|max:255',
            'github_url' => 'nullable|url',
            'live_url' => 'nullable|url',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:4096',
        ]);

        if ($request->hasFile('image')) {
            if ($project->image_path && Storage::disk('public')->exists($project->image_path)) {
                Storage::disk('public')->delete($project->image_path);
            }
            $validated['image_path'] = $request->file('image')->store('projects', 'public');
        }

        $project->update($validated);

        return redirect()->route('dashboard')->with('success', 'Project updated successfully!');
    }

    public function destroy(Project $project)
    {
        if ($project->image_path && Storage::disk('public')->exists($project->image_path)) {
            Storage::disk('public')->delete($project->image_path);
        }

        $project->delete();

        return redirect()->route('dashboard')->with('success', 'Project deleted!');
    }
}