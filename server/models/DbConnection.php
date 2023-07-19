<?php
class DbConnection {
    private static $pdo;
    private static $dbSettings;

    public static function getInstance() {
        if (!self::$pdo) {
            $dbSettings = require __DIR__ . '/../config/dbconfig.php';
            try {
                $dsn = "pgsql:host=" . $dbSettings['host'] . ";port=" . $dbSettings['port'] . ";dbname=" . $dbSettings['database'];
                self::$pdo = new PDO($dsn, $dbSettings['username'], $dbSettings['password']);
                self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                die('Database connection failed: ' . $e->getMessage());
            }
        }
        return self::$pdo;
    }
}
