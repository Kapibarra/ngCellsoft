<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php/PHPMailer-5.2.28/src/Exception.php';
require 'php/PHPMailer-5.2.28/src/PHPMailer.php';
require 'php/PHPMailer-5.2.28/src/SMTP.php';

$mail = new PHPMailer(true);
$mail_subject = 'Заявка с сайта';
$mail_to_email = '-'; // your email
$mail_to_name = '-';

try {

	$mail_from_name = isset( $_POST['name'] ) ? $_POST['name'] : '';
	$mail_from_phone = isset( $_POST['phone'] ) ? $_POST['phone'] : '';
	$mail_from_email = isset( $_POST['email'] ) ? $_POST['email'] : '';
	$mail_from_inn = isset( $_POST['inn'] ) ? $_POST['inn'] : '';
	$mail_from_service = isset( $_POST['service'] ) ? $_POST['service'] : '';
	$mail_from_message = isset( $_POST['message'] ) ? $_POST['message'] : '';
	$mail_from_city = isset( $_POST['city'] ) ? $_POST['city'] : '';
	

	// Server settings
	$mail->isSMTP(); // Send using SMTP
	$mail->Host = 'smtp.yandex.com'; // Set the SMTP server to send through
	$mail->SMTPAuth = true; // Enable SMTP authentication
	$mail->Username = '-'; // SMTP username
	$mail->Password = '-'; // SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
	$mail->Port = 465; // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

	$mail->setFrom($mail->Username, 'bits.balance.ru'); // Your email
	$mail->addAddress($mail_to_email, $mail_to_name); // Add a recipient на какой емейл отправить!! проверить!!!!

	for($ct=0; $ct<count($_FILES['file_attach']['tmp_name']); $ct++) {
		$mail->AddAttachment($_FILES['file_attach']['tmp_name'][$ct], $_FILES['file_attach']['name'][$ct]);
	}

	// Content
	$mail->isHTML(true); // Set email format to HTML

	$mail->Subject = $mail_subject;
	$mail->Body = '
		
		<strong>Phone:</strong> ' . $mail_from_phone . '<br>
		<strong>Name:</strong> ' . $mail_from_name; 
		'<br>
		<strong>Name:</strong> ' . $mail_from_email; 
		'<br>
		<strong>Name:</strong> ' . $mail_from_inn; 
		'<br>
		<strong>Name:</strong> ' . $mail_from_service; 
		'<br>
		<strong>Name:</strong> ' . $mail_from_city; 
		'<br>
		<strong>Name:</strong> ' . $mail_from_message; 
	$mail->Send();

	echo '<script>
	alert("Your message has been sent!")
	</script>';

} catch (Exception $e) {
	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

}