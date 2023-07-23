<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use slim\Middleware\BodyParsingMiddleware;
use Slim\Factory\AppFactory;
require __DIR__. '/../vendor/autoload.php';
require __DIR__. '/../controller/userControler.php';
error_reporting(E_ERROR | E_PARSE);

$app = AppFactory::create();
$app->addBodyParsingMiddleware();

$app->post('/register',function($request, $response){
        $body = $request->getParsedBody();
        
        $name= $body['name'];
        $password= $body['password'];
        $email= $body['email'];
        $data = registerNewUser($name,$email,$password);
        $response->getBody()->write(json_encode($data['message']));
        
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus($data['code']);
    });

    