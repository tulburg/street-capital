<?php
	
	// init classes
	$Talks = new Talks();
	$Attendees = new Attendees();
	$TalkAttendees = new TalkAttendees();

	$response = array();
	$action = Router::$routes[1];

	switch($action) {
		case 'login':
			if(fn::request_method('post')) {
				$data = fn::json();
				if(fn::not_empty(array($data->username, $data->password))) {
					// do login
				}else {
					$response = fn::error("Incomplete Data", 400);
				}
			}else {
				$response = fn::error("Bad Request Method", 405);
			}
			break;

		case 'add-talk' :
			if(fn::request_method('post')) {
				$data = fn::json();
				if(@fn::not_empty(array($data->title, $data->abstract, $data->room))) {
					// insert(fields, whereClause)
					if($Talks->insert(
						array("title" => $data->title, "abstract" => $data->abstract, "room" => $data->room),
						array("title" => $data->title, "room" => $data->room)
					)) {
						$response = fn::success("New talk added", 200);
					}else { $response = fn::error($Talks->error_string, 200); }
				}else { $response = fn::error("Incomplete Data", 400); }
			}else { $response = fn::error("Bad Request Method", 405); }
			break;

		case 'add-attendee':
			if(fn::request_method('post')) {
				$data = fn::json();
				if(@fn::not_empty(array($data->name, $data->company, $data->email, $data->bio))) {
					// insert (fields, whereClause)
					if($Attendees->insert(
						array("name" => $data->name, "company" => $data->company, "email" => $data->email, "bio" => $data->bio),
						array("email" => $data->email)
					)) {
						$response = fn::success("New attanedee inserted", 200);
					}else { $response = fn::error($Attendee->error_string, 200); }
				}else { $response = fn::error("Incomplete Data", 400); } 
			}else { $response = fn::error("Bad Request Method", 405); }
			break;

		case 'add-to-talk' :
			if(fn::request_method('put')) {
				$data = fn::json();
				if(@fn::not_empty(array($data->talk_id, $data->attendee_id))) {
					// insert (fields, whereClause, clauseJoint(and))
					if($TalkAttendees->insert(
						array("talk_id" => $data->talk_id, "attendee_id" => $data->attendee_id),
						array("talk_id" => $data->talk_id, "attendee_id" => $data->attendee_id),
						true
					)) {
						$response = fn::success("Attendee added to talk", 200);
					}else { $response = fn::error($TalkAttendees->error_string, 200); }
				}else { $response = fn::error("Incomplete Data", 400); } 
			}else { $response = fn::error("Bad Request Method", 405); }
			break;

		case 'remove-talk':
			if(fn::request_method('delete')) {
				$data = fn::json();
				if(@fn::not_empty(array($data->talk_id))) {
					// delete (whereClause)
					if($Talks->delete(array("id" => $data->talk_id)) && $TalkAttendees->delete(array("talk_id" => $data->talk_id))) {
						$response = fn::success("Deletion successful", 200);
					}else { $response = fn::error($Talks->error_string." / ".$TalkAttendees->error_string, 200); }
				}else { $response = fn::error("Incomplete Data", 400); } 
			}else { $response = fn::error("Bad Request Method", 405); }
			break;

		default:
			$response = fn::error("Unknown Endpoint", 501);
	}


	echo json_encode($response);