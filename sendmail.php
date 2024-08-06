<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

// Получаем порт из переменной окружения
$port = getenv('PORT') ? getenv('PORT') : 3000;

// Обрабатываем только POST-запросы
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method Not Allowed']);
    exit;
}

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language');
$mail->IsHTML(true);

//Від кого лист
$mail->setFrom('julimazur@gmail.com');
//Кому надіслати
$mail->addAddress('julimazur@gmail.com');
// Тема листа
$mail->Subject = 'Hello! Make website!';

//Тіло листа
$body = '<h1>I have proposition</h1>';

if (trim(!empty($_POST['name']))){
    $body.='<p>'.$_POST['name'].'</p>';
} if (trim(!empty($_POST['email']))) {
    $body .= '<p>' . $_POST['email'] . '</p>';
} if (trim(!empty($_POST['message']))) {
    $body .= '<p>' . $_POST['message'] . '</p>';
}

$mail->Body = $body;

//Відправляємо
if(!$mail->send()){
    $message = 'Error';
} else {
    $message = 'Data sent';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>