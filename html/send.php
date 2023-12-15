<?php
$lang = "ru";
$charset = "UTF-8";
$namePort = "viewport"; 
$content = "width=device-width, initial-scale=1.0";
$rel = "stylesheet";
$href = "../css/form.css";

$classContainer = "container";
$classLoginCard = "login__card"; 
$textAlign = "text-align: center";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["username"]); 
    $email = htmlspecialchars($_POST["useremail"]);
    
    $name = urldecode($_POST["username"]); 
    $email = urldecode($_POST["useremail"]);
    
    $name = trim($_POST["username"]); 
    $email = trim($_POST["useremail"]);
    
    echo "
    <!DOCTYPE html>
    <html lang=$lang>
    <head>
    <meta charset=$charset>
    <meta name=$namePort content=$content>
    <link rel=$rel href=$href>
    <title>Gameboy Login</title>
    </head>
    <body>
        <div class=$classContainer>
            <div class=$classLoginCard>
                <h1>Hello, $name</h1>
                <p style='$textAlign'>We will write you on email <br/> $email</p>
            </div>
        </div>
    </body>
    </html>
    ";
}
?>