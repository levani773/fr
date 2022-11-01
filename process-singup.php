<?php
 if (empty($_POST["name"])){
    die("Name is repuired");
 }
if ( ! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
    die("Valid email is requed");
}
if (strlen($_POST["password"]) < 8) {
    die("password must be at least 8 charach");
}
if ( ! preg_match("/[a-z]/i", $_POST["password"])){
    die("password must contain at least one letter");
}
if ( ! preg_match("/[0-9]/i", $_POST["password"])){
    die("password must contain at least one number");
}
if ($_POST["password"] !== $_POST["password_confirmacion"]){
    die("password must match");
}
$password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT);

$mysqli = require __DIR__ . "/database.php";

print_r($_POST);
var_dump($password_hash);
?>