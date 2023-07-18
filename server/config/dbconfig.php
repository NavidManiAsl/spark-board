<?php
require __DIR__. '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/../');
$dotenv->load();

return [
    'driver' => 'pgsql',
    'host' => $_ENV['POSTGRES_HOST'],
    'port' => $_ENV['POSTGRES_PORT'],
    'database' => $_ENV['POSTGRES_DATABASE'],
    'username' => $_ENV['POSTGRES_USERNAME'],
    'password' => $_ENV['POSTGRES_PASSWORD'],
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix' => '',
];