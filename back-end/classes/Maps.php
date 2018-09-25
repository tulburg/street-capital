<?php

	class Talks extends Super {
		public $table = "talks";
		public $id, $title, $abstract, $room, $date_created, $date_updated;
		public function __construct(){}		
	}

	class Attendees extends Super {
		public $table = "attendees";
		public $id, $talk_id, $name, $company, $email, $bio, $date_created, $date_updated;
		public function __construct(){}
	}

	class TalkAttendees extends Super {
		public $table = "talk_attendees";
		public $id, $talk_id, $attendee_id, $date_created, $date_updated;
		public function __construct(){}
	}

