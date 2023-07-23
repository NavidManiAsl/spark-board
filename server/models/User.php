<?php
require __DIR__. '/DbConnection.php';

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

    public function saveUser(){
        try {
            $sql = 'INSERT INTO users (username, user_pass, email, created_on) VALUES (:name, :email, :password, :timestamp)';
            $stmt= $this->pdo->prepare($sql);
            $timestamp = new DateTime();
            $timestamp=$timestamp->format('Y-m-d H:i:s');;
            
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':email', $this->email);
            $stmt->bindParam(':password', $this->password);
            $stmt->bindParam(':timestamp', $timestamp);

            $stmt->execute();
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function validateName(){
       // check that its unique and length characters are ok
        return true;
    }

    public function validateEmail(){
        // check if email is unique and follows the email pattern
        return true;
    }

    public function validatePassword(){
        // password length and chars
        return true;
    }
    public function passwordHash(){
       return  password_hash($this->password,PASSWORD_DEFAULT);
    }
    
    // Getters and Setters

    public function getName() {
        return $this->name;
    }

    public function setEmail($newEmail) {
        $this->email = $newEmail;
    }
    
    public function setPassword($newPassword) {
        $this->password = $newPassword;
    }
}