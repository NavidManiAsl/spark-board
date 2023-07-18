<?php
require __DIR__. '/../vendor/autoload.php';
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;


$app = AppFactory::create();

$app->get('/login/{userName}',function($request, $response, $args){
    $userName = $args['userName'];
    test($userName);die;
    });

    