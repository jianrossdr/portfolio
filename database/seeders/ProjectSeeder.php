<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Reservation System (GUI w/ SQL)',
                'description' => 'Engineered a Java-based desktop reservation system integrating SQL database operations for reliable CRUD functionality and record persistence. Built an intuitive GUI to streamline booking workflows.',
                'tech_stack' => 'Java, SQL, Swing/JavaFX, CRUD',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'title' => 'Concert Ticket System (CLI)',
                'description' => 'Implemented core data structures in Java using Queues for fair FIFO customer handling and HashMaps for O(1) constant-time ticket lookups. Optimized for speed and high-performance querying.',
                'tech_stack' => 'Java, Data Structures (HashMaps, Queues), Algorithms',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'title' => 'Barangay Management System',
                'description' => 'Created a C# desktop application to streamline resident data management and document issuance for local administrative units. Designed structured workflows to minimize paperwork.',
                'tech_stack' => 'C#, .NET, SQL, Desktop Architecture',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'title' => 'Courant - IoT Power Monitoring System',
                'description' => 'Contributed to an IoT power monitoring platform combining hardware sensor telemetry with real-time data tracking and automated power regulation logic for energy optimization.',
                'tech_stack' => 'IoT, Embedded Systems, Real-Time Data, Hardware Telemetry',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'title' => 'FujiFeast Mobile UI/UX Prototype',
                'description' => 'Designed an interactive, high-fidelity mobile food-app prototype. Crafted streamlined user flows to reduce navigation steps and simplify the end-to-end checkout experience.',
                'tech_stack' => 'Figma, UI/UX Design, Prototyping, Wireframing',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'title' => 'Architectural Interior & Exterior Animation',
                'description' => 'Modeled, textured, and lit interior and exterior architectural scenes. Rendered walkthrough animations emphasizing realistic lighting and clean visual presentation.',
                'tech_stack' => '3ds Max, 3D Modeling, Lighting, Texturing',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'title' => 'Interactive 3D Maze Simulation',
                'description' => 'Created a playable 3D maze environment with custom character controls, collision logic, and strategic level layouts pacing player movement and navigation.',
                'tech_stack' => 'Unreal Engine, Game Logic, 3D Level Design, Physics',
                'github_url' => null,
                'live_url' => null,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}