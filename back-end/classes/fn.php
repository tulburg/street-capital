<?php

	class fn {

		private $key, $iv;
		public function __construct() {
			$this->key = hash('sha256', "session");
			$this->iv = base64_encode("class");
		}

		public static function json() {
	    	$data = json_decode(file_get_contents('php://input'));
	    	if($data) {
	    		foreach($data as $key => $value) {
		    		if(strstr($key, 'email')) { $data->$key = trim(addslashes(filter_var($value, FILTER_SANITIZE_EMAIL, FILTER_NULL_ON_FAILURE))); }
		    		else if(strstr($key, 'url')) { $data->$key = trim(addslashes(filter_var($value, FILTER_SANITIZE_URL, FILTER_NULL_ON_FAILURE))); }
		    		else if(strstr($key, 'password')) {}
		    		else { $data->$key = trim(addslashes(filter_var($value, FILTER_SANITIZE_STRING, FILTER_NULL_ON_FAILURE))); }
		    	}
	    	}
	    	return $data;
	    }

	    private function decode($data) {
			// $decode = mcrypt_decrypt(MCRYPT_3DES, $this->key, $data, MCRYPT_DECRYPT);
			$iv = substr(hash('sha256', $this->iv ), 0, 16 );
			$decode = openssl_decrypt(base64_decode($data), "AES-256-CBC", $this->key, 0, $iv );
			return explode("|", $decode);
		}

		private function encode($data) {
			$iv = substr( hash('sha256', $this->iv ), 0, 16 );
			return base64_encode(openssl_encrypt(join("|", $data), "AES-256-CBC", $this->key, 0, $iv ) );
			// return mcrypt_ecb(MCRYPT_3DES, $this->key, "$userid|$datetime|$access", MCRYPT_ENCRYPT);
		}

		public function createToken($data) {
			return $this->encode($data, $this->key);
		}

	    public function authenticate() {
		  	$headers = apache_request_headers();
			if(isset($headers['Authorization'])){
			    $matches = array();
			    preg_match('/Bearer (.*)/', $headers['Authorization'], $matches);
			    if(isset($matches[1])){
			      	$token = $matches[1];
			      	$data = $this->decode($token);
			      	if(count($data) == 3) { 
			      		return true; 
			      	}
			      	// do more validation with data here
			    }
			}
			return false;
		}

		public static function request_method($method) {
			return strtolower($_SERVER['REQUEST_METHOD']) == strtolower($method);
		}

		public static function error($message, $code) {
			http_response_code($code);
			return array("error" => $message, "status" => $code);
		}

		public static function success($message) {
			http_response_code(200);
			return array("success" => $message, "status" => 200);
		}

		public static function not_empty($array) {
			foreach($array as $o) {
				if(empty($o)) {
					return false;
				}
			}
			return true;
		}
	}
?>