<?php

	class Router {
		public static $routes = array();

		public static $uri = "";

		public function __construct(){
			Router::getRoutes();
		}

		public static function getRoutes(){
			$basepath = implode('/', array_slice(explode('/', $_SERVER['SCRIPT_NAME']), 0, -1)) . '/';
			$uri = substr($_SERVER['REQUEST_URI'], strlen($basepath));
			if(strstr($uri, '?')) $uri = substr($uri, 0, strpos($uri, '?'));
			$uri = '/'.trim($uri, '/');
			Router::$uri = $uri;
			$routes = explode('/', $uri);
			foreach($routes as $route){
				if(trim($route) != ''){
					array_push(Router::$routes, $route);
				}
			}
			Router::$routes =  array_keys(array_flip(Router::$routes));
		}

		public static function port($route, $filename){
			if(preg_match($route, Router::$uri)){
				AutoLoader::loadExtra($filename);
				exit();
			}
		}

		public static function get($index){
			return urldecode(self::$routes[$index]);
		}

		public static function isRoute($route){
			if(in_array($route, Router::$routes)){
				return true;
			}
			return false;
		}
	}
