<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    <title>registracion</title>
</head>
<body>
<h1>sing up</h1>

<form action="process-singup.php" method="post">
    <div>
    <label for="name">name</label>
        <input type="text" id="name" name="name">
    </div>
    <div>
        <label for="email">email</label>
        <input type="email" id="email" name="email">
    </div>
    <div>
        <label for="password">password</label>
        <input type="password" id="password" name="password">
    </div>
    <div>
        <label for="password_confirmation">password</label>
        <input type="password" id="password_confirmation" name="password_confirmation">
    </div>
    <button>sing up</button>
</form>
    
</body>
</html>