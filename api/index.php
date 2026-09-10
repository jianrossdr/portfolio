<?php

declare(strict_types=1);

// Vercel's PHP runtime invokes files in /api. Forward each request to
// Laravel's regular HTTP front controller so Laravel owns all routing.
require __DIR__.'/../public/index.php';
