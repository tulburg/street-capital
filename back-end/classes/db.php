<?php

class db {

    private static $query;
    private static $data;
    private static $pdo;
    public static $error_string;

    public function __construct() {
        self::connect();
    }

    public static function connect() {
        try {
            self::$pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public static function query($query) {
        self::connect();
        self::$query = $query;
        self::$data = self::$pdo->prepare(self::$query);
        $sent = self::$data->execute();
        if (!$sent) {
            $error = self::$data->errorInfo();
            self::$error_string = $error[2];
        }
        return $sent;
    }

    public static function queryParams($query, $params){
        self::connect();
        self::$query = $query;
        self::$data = self::$pdo->prepare(self::$query);
        $sent = self::$data->execute($params);
        if(!$sent){
            $error = self::$data->errorInfo();
            self::$error_string = $error[2];
        }
        return $sent;
    }

    public static function fetchObj() {
        return self::$data->fetchAll(PDO::FETCH_OBJ);
    }

    public static function fetchAssoc() {
        return self::$data->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function fetchClass() {
        return self::$data->fetchAll(PDO::FETCH_CLASS);
    }

    public static function lastId() {
        return self::$pdo->lastInsertId();
    }

    public static function numRows() {
        return self::$data->rowCount();
    }

}

