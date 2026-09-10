<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Vercel's deployment filesystem is read-only; Laravel's package manifest needs a writable cache.
$runtimeCachePath = '/tmp/laravel-cache';
if (! is_dir($runtimeCachePath) && ! mkdir($runtimeCachePath, 0755, true) && ! is_dir($runtimeCachePath)) {
    throw new RuntimeException("Unable to create Laravel runtime cache directory: {$runtimeCachePath}");
}

putenv("APP_PACKAGES_CACHE={$runtimeCachePath}/packages.php");
putenv("APP_SERVICES_CACHE={$runtimeCachePath}/services.php");

// Bootstrap Laravel and handle the request...
/** @var Application $app */
$app = require_once __DIR__.'/../bootstrap/app.php';

$app->register(\Illuminate\Filesystem\FilesystemServiceProvider::class);
$app->register(\Illuminate\Translation\TranslationServiceProvider::class);
$app->singleton('events', static fn ($app) => new \Illuminate\Events\Dispatcher($app));
$app->register(\Illuminate\Events\EventServiceProvider::class);
$app->register(\Illuminate\View\ViewServiceProvider::class);

$app->handleRequest(Request::capture());
