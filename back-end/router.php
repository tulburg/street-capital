<?php

	ini_set("display_errors", E_ALL);
	header("Access-Control-Allow-Origin: *"); 
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
	header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
	
	require_once "classes/AutoLoader.php";
	AutoLoader::loadExtra("inc/config.inc");
	AutoLoader::registerDirectory("classes");
	AutoLoader::loadExtra("classes/Maps.php");

	Router::getRoutes();

	Router::port("^\/apiv1/*^", "apiv1.php");


	// handle not found

	echo json_encode(array("error" => "Page not found", "status" => 404));
	http_response_code(404);