<?php


class User {
    private $name;
    private $email;
    private $password;
    private $pdo;

    public function __construct($name, $email, $password)
    {
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
        $this->pdo= DbConnection::getInstance();

    }

    public function registerUser(){
        try {
            $sql = 'INSERT INTO users (username, user_pass, email, created_on) VALUES (:name, :email, :password, :timestamp)';
            $stmt= $this->pdo->prepare($sql);
            $hashedPassword = password_hash($this->password, PASSWORD_DEFAULT);
            $timestamp = time();
            
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':email', $this->email);
            $stmt->bindParam(':password', $hashedPassword);
            $stmt->bindParam(':timestamp', $timestamp);

            $stmt->execute();
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }


    }
    
    // Getters and Setters

    public function getName() {
        return $this->name;
    }

    public function setEmail($newEmail) {
        $this->email = $newEmail;
    } 
}