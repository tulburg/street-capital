<?php

	class Super {

		public $error_string = "";
		public $table = "";
		public $query = "";

		public $DELETED = 1011, $DEFAULT = 1010, $SUSPENDED = 1012; 

		public function __construct() {
		}

		public function insert($fields, $where = null, $and = false) {
			if(is_array($fields)) {
				$queries = "";
				foreach($fields as $k => $v) {
					$queries .= "$k=:$k, ";
				}
				$queries = substr($queries, 0, strlen($queries) - 2);
				$exec = null;
				if($where == null) {
					$exec = db::queryParams("insert into ".$this->table." set ".$queries, $fields);
				}else {
					$w = "";
					foreach($where as $k => $v) {
						$w .= ($and) ? "$k=:$k and " : "$k=:$k or ";
					}
					$w = ($and) ? substr($w, 0, strlen($w) - 5) : substr($w, 0, strlen($w) - 4);
					$this->query = "select * from ".$this->table." where ".$w;
					$check = db::queryParams($this->query, $where);
					if($check && db::numRows() > 0){
						$this->error_string = "exist";
						return false;
					}
					$this->query = "insert into ".$this->table." set ".$queries;
					$exec = db::queryParams($this->query, $fields);
				}
				if($exec) {
					return true;
				}
				$this->error_string = db::$error_string;
				return false;
			}else {
				throw new Exception("Invalid data type, please use an array");
			}
		}

		public function fetch($fields, $where = null, $and = false, $extras = "") {
			if(is_array($fields)) {
				$exec = null;
				if($where == null) {
					$exec = db::queryParams("select ".join(", ", $fields)." from ".$this->table." where status='$this->DEFAULT' ".$extras, $fields);
				}else {
					$w = "";
					foreach($where as $k => $v) {
						$w .= ($and) ? "$k=:$k and " : "$k=:$k or ";
					}
					$w = ($and) ? substr($w, 0, strlen($w) - 5) : substr($w, 0, strlen($w) - 4);
					$this->query = "select ".join(", ", $fields)." from ".$this->table." where (".$w.") and status='$this->DEFAULT' ".$extras;
					$exec = db::queryParams($this->query, $where);
				}
				if(db::numRows() > 0) {
					return db::fetchObj()[0];
				}
				$this->error_string = db::$error_string;
				return null;
			}else {
				throw new Exception("Invalid data type, please use an array");
			}
		}

		public function get($fields, $where = null, $and = false, $extras = "") {
			if(is_array($fields)) {
				$exec = null;
				if($where == null) {
					$this->query = "select ".join(", ", $fields)." from ".$this->table." ".$extras;
					$exec = db::queryParams("select ".join(", ", $fields)." from ".$this->table." ".$extras, $fields);
				}else {
					$w = "";
					foreach($where as $k => $v) {
						$w .= ($and) ? "$k=:$k and " : "$k=:$k or ";
					}
					$w = ($and) ? substr($w, 0, strlen($w) - 5) : substr($w, 0, strlen($w) - 4);
					$this->query = "select ".join(", ", $fields)." from ".$this->table." where (".$w.") ".$extras;
					$exec = db::queryParams($this->query, $where);
				}
				if(db::numRows() > 0) {
					return db::fetchObj()[0];
				}
				$this->error_string = db::$error_string;
				return null;
			}else {
				throw new Exception("Invalid data type, please use an array");
			}
		}

		public function fetchMany($fields, $where = null, $and = false, $extras = "") {
			if(is_array($fields)) {
				$exec = null;
				$result = array();
				if($where == null) {
					$exec = db::queryParams("select ".join(", ", $fields)." from ".$this->table." where status='$this->DEFAULT' ".$extras, $fields);
				}else {
					$w = "";
					foreach($where as $k => $v) {
						$w .= ($and) ? "$k=:$k and " : "$k=:$k or ";
					}
					$w = ($and) ? substr($w, 0, strlen($w) - 5) : substr($w, 0, strlen($w) - 4);
					$this->query = "select ".join(", ", $fields)." from ".$this->table." where (".$w.") and status='$this->DEFAULT' ".$extras;
					$exec = db::queryParams($this->query, $where);
				}
				$fetched = db::fetchObj();
				if(db::numRows() > 0) {
					for($i=0;$i<db::numRows();$i++) {
						array_push($result, $fetched[$i]);
					}
				}
				$this->error_string = db::$error_string;
				return $result;
			}else {
				throw new Exception("Invalid data type, please use an array");
			}
		}

		public function getMany($fields, $where = null, $and = false, $extras = "") {
			if(is_array($fields)) {
				$exec = null;
				$result = array();
				if($where == null) {
					$exec = db::queryParams("select ".join(", ", $fields)." from ".$this->table." ".$extras, $fields);
				}else {
					$w = "";
					foreach($where as $k => $v) {
						$w .= ($and) ? "$k=:$k and " : "$k=:$k or ";
					}
					$w = ($and) ? substr($w, 0, strlen($w) - 5) : substr($w, 0, strlen($w) - 4);
					$this->query = "select ".join(", ", $fields)." from ".$this->table." where (".$w.") ".$extras;
					$exec = db::queryParams($this->query, $where);
				}
				$fetched = db::fetchObj();
				if(db::numRows() > 0) {
					for($i=0;$i<db::numRows();$i++) {
						array_push($result, $fetched[$i]);
					}
				}
				$this->error_string = db::$error_string;
				return $result;
			}else {
				throw new Exception("Invalid data type, please use an array");
			}
		}

		public function fetchLatest($fields, $timestamp, $extras = "", $raw = false) {
			if(is_array($fields)) {
				$exec = null;
				$result = array();
				if($raw) {
					$exec = db::queryParams("select ".join(", ", $fields)." from ".$this->table." where date_updated > '".$timestamp."' ".$extras, $fields);
				}else {
					$exec = db::queryParams("select ".join(", ", $fields)." from ".$this->table." where date_updated > '".$timestamp."' ".$extras, $fields);
				}
				$fetched = db::fetchObj();
				if(db::numRows() > 0) {
					for($i=0;$i<db::numRows();$i++) {
						array_push($result, $fetched[$i]);
					}
				}
				$this->error_string = db::$error_string;
				return $result;
			}else {
				throw new Exception("Invalid data type, please use an array");
			}
		}

		public function update($fields, $where = null, $and = false) {
			if(is_array($fields)) {
				$queries = "";
				foreach($fields as $k => $v) {
					$queries .= "$k=:$k, ";
				}
				$queries = substr($queries, 0, strlen($queries) - 2);
				$exec = null;
				if($where == null) {
					throw new Exception("Invalid data type, where clause cannot be null");
				}else {
					$w = "";
					foreach($where as $k => $v) {
						$w .= ($and) ? "$k=:$k and " : "$k=:$k or ";
					}
					$w = ($and) ? substr($w, 0, strlen($w) - 5) : substr($w, 0, strlen($w) - 4);
					$exec = db::queryParams("update ".$this->table." set ".$queries." where ".$w, array_merge($fields, $where));
				}
				if($exec) {
					return true;
				}
				$this->error_string = db::$error_string;
				return false;
			}else {
				throw new Exception("Invalid data type, please use an array");
			}
		}

		public function delete($where, $and = false) {
			if(is_array($where)) {
				$w = "";
				foreach($where as $k => $v) {
					$w .= ($and) ? "$k=:$k and " : "$k=:$k or ";
				}
				$w = ($and) ? substr($w, 0, strlen($w) - 5) : substr($w, 0, strlen($w) - 4);
				if(db::queryParams("delete from ".$this->table." where ".$w, $where)){
					return true;
				}
				$this->error_string = db::$error_string;
				return false;
			}else {
				throw new Exception("Invalid data type, please use an array");
			}
		}

		public function count() {
			if(db::query("select count(id) max from ".$this->table)){
				return db::fetchObj()[0]->max;
			}
			return null;
		}

		public function lastId() {
			if(db::query("select id from ".$this->table." order by id desc limit 1")) {
				return db::fetchObj()[0]->id;
			}
			return null;
		}

		public function lastInsertedId() {
			return db::lastId();
		}
	}

?>