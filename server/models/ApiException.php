<?php

class ApiException extends Exception implements Throwable{

   
    public function setMessage($newMessage){
        $this->message = $newMessage;
    }
    public function setCode($newCode){
        $this->code = $newCode;
    }
}