<?php
require __DIR__. '/../bootstrap/index.php';
require __DIR__. '/../controller/authController.php';
require __DIR__. '/../vendor/autoload.php';
$dbSettings = require __DIR__.'/../config/dbconfig.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/../');
$dotenv->load();


try {
    $dsn = "pgsql:host={$dbSettings['host']};port={$dbSettings['port']};dbname={$dbSettings['database']}";
    $pdo = new PDO($dsn, $dbSettings['username'], $dbSettings['password']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   
} catch (PDOException $e) {
    die('database connection failed' . $e->getMessage());
}


$app->run();