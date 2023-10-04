<?php

header("Access-Control-Allow-Origin: *");  
header("Access-Control-Allow-Headers: *"); 
header("Content-Type: application/json");  


if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["error" => "Invalid request method"]);
    exit;
}


$name = isset($_POST["nombre"]) ? trim($_POST["nombre"]) : "";
$email = isset($_POST["correo"]) ? trim($_POST["correo"]) : "";
$phone = isset($_POST["telefono"]) ? trim($_POST["telefono"]) : "";
$message = isset($_POST["mensaje"]) ? trim($_POST["mensaje"]) : "";

if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    echo json_encode(["error" => "Falta rellenar la información de algunos campos"]);
    exit;
}

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->SMTPAuth = true;

    $mail->Host = "smtp.gmail.com";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->Username = "testingmregg@gmail.com";
    $mail->Password = "yxsnhxylbkreugxt"; 

    $mail->setFrom($email, $name);
    $mail->addAddress("info@mregg.info", "Info Mr. Egg");

    $mail->Subject = "Mensaje de contacto de $name";
    $mail->Body = "Nombre: $name\nCorreo: $email\nTeléfono: $phone\n\nMensaje:\n$message";

    $mail->send();
    echo json_encode(["success" => "Email sent"]);
} catch (Exception $e) {
    echo json_encode(["error" => "No se pudo enviar el mensaje. Mailer Error: {$mail->ErrorInfo}"]);
}

?>

