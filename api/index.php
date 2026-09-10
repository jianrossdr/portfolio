<?php

/**
 * Serverless entrypoint for Vercel (vercel-php runtime).
 *
 * Vercel's filesystem is read-only except for /tmp, so we create the
 * directories Laravel needs to write to there before booting the app.
 * The matching paths are configured via environment variables in vercel.json
 * (VIEW_COMPILED_PATH, APP_*_CACHE, LOG_CHANNEL=stderr, etc.).
 */

$writableDirs = [
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache',
    '/tmp/storage/framework/sessions',
    '/tmp/storage/logs',
    '/tmp/bootstrap/cache',
];

foreach ($writableDirs as $dir) {
    if (! is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
}

require __DIR__.'/../public/index.php';
