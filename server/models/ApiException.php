<?php

class ApiException {

    public function __construct(public string $message , public int $code) {
        
    }
    
    public function getMessage(){
        return $this->message;
    }
    
    public function getcode(){
        return $this->code;
    }

    public function setMessage($newMessage){
        $this->message = $newMessage;
    }
    public function setCode($newCode){
        $this->code = $newCode;
    }
}