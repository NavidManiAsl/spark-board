<?php 
 require __DIR__. '/../models/User.php';
 require __DIR__. '/../models/ApiException.php';

 function registerNewUser($name, $email, $password){
  try{
    $user = new User($name, $email, $password);
    if(!$user->validateName()){
        throw new ApiException('Invalid username', 400);
    }
    if(!$user->validatePassword()){
        throw new ApiException('Invalid password', 400);
    }
    if(!$user->validateEmail()){
        throw new ApiException('Invalid username', 400);
    }
    
    $user->passwordHash();
    $user->saveUser();
    
    return [
        'message' => 'new user has been registered',
        'code' =>'200'
    ];

  } catch (ApiException $e){
    return [
        'message' => $e->getMessage(),
        'code' => $e->getcode(),
    ];
  }
 }