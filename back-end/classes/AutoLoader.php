<?php

	class AutoLoader {

		private static $classNames = array();

		public static function registerDirectory($name){
			try{
				$di = new DirectoryIterator($name);
				foreach($di as $file_dir){
					if($file_dir->isDir() && !$file_dir->isLink() && !$file_dir->isDot()){
						self::registerDirectory($file_dir->getPathname());
					}else if(substr($file_dir->getPathname(), -4) == '.php'){
						$className = substr($file_dir->getFilename(), 0, -4);
						AutoLoader::registerClass($className, $file_dir->getPathname());
					}
				}
			}catch(Exception $e){
				// echo $e->getMessage();
			}
		}
		public static function registerClass($className, $filepath){
			AutoLoader::$classNames[$className] = $filepath;
		}
		public static function loadClass($className){
			if(isset(AutoLoader::$classNames[$className])){
				include_once(AutoLoader::$classNames[$className]);
			}
		}
		public static function loadExtra($className){
			AutoLoader::registerClass($className, $className);
			AutoLoader::loadClass($className);
		}
	}

	spl_autoload_register(array('AutoLoader', 'loadClass'));