<?php 

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

// Method to check the database
    sendActivationEmail($name, $email, $message);
}else{
    echo "something went wrong";
}

function sendActivationEmail($name, $email, $message){
        require_once('PHPMailer/PHPMailerAutoload.php');
        $mail = new PHPMailer;
        $mail->isSMTP();                                   // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';      // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                            // Enable SMTP authentication
        $mail->Username = 'akeem.b.ahmed@gmail.com';  // SMTP username
        $mail->Password = 'abh2k3aug';                     // SMTP password
        $mail->SMTPSecure = 'tls';                         // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;  // TCP port to connect to

        $mail->setFrom('akeem.b.ahmed@gmail.com');
        $mail->addReplyTo('akeem.b.ahmed@gmail.com');
        $mail->addAddress('akeem.b.ahmed@gmail.com');   // Add a recipient
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');
        $mail->isHTML(true);  // Set email format to HTML=
        $mail->Subject = 'Message from your site';
        $mail->Body    = $message ." ". $email ." ". $name;

        if(!$mail->send()) {
            echo 'An Error occured please fill the form again';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Yes';
        }
    }

?>