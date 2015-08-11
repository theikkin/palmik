<?php 

   $youremail = "your@email.com";// Place your email address here!!

   // Creating the email
   $msg     = "Send by: ".$_POST['name']."\r\n";
   $msg    .= "Emailaddress: ".$_POST['email']."\r\n";
   $msg    .= "Subject: ".$_POST['subject']."\r\n\r\n";
   $msg    .= "Message\r\n";
   $msg    .= $_POST['message']."\r\n\r\n";
   $msg    .= "Company: ".$_POST['company']."\r\n";
   $msg    .= "Street: ".$_POST['street']."\r\n";
   $msg    .= "Phone: ".$_POST['phone']."\r\n";
   $subject = "Email from ".$_POST['name'];
   $headers = "From: ".$_POST['email']." \r\n";
				 
   //Sending the email
   if (mail($youremail, $subject, $msg, $headers)){ 
   
	   // Redirecting to the thank you page
	   header("Status: 200"); // chrome fix 
	   header("Cache-Control: no-cache"); // IE fix
       header("Expires: -1"); // IE fix
	   header("Location: messagesend.html" );
	   
     }else{
		 
	   // If the mail is not send 
	   header("Status: 200"); // chrome fix 
	   header("Cache-Control: no-cache"); // IE fix
       header("Expires: -1"); // IE fix
	   header("Location: senderror.html" );
	   
   }

?> 
