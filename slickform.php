<?php


if(isset($_REQUEST["isvalid"])){
	
	$youremail = "pintcoin@gmail.com"; 
	$usersname = $_POST["usersname"];
	$usersemail = $_POST["usersemail"];
	$usersphonenumber = $_POST["usersphone"];
	$mailsubject = "Contact From Pintcoins.com";	
	$usersmessage = $_POST["userscomment"];
	$message =
	
	"$usersname has contacted you from pintcoins.com.
	
	$subject:
	
	Their Message is as follows:
	
	$usersmessage
	
	...............................................
	
	Contact details:
	
	Phone Number: $usersphonenumber
	Email Address: $usersemail"; 
	
	$headers = 'From:' . $usersemail . "\r\n";
	mail($youremail, $mailsubject, $message, $headers);
	
	echo "success";
	
} else {
	
	echo "failed";
	
}