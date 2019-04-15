<html>
<body>
<h1>User Greeting</h1>
<?php
 // This will print whatever the user entered into the form.html page.
 $name = filter_input(INPUT_GET, 'myName', FILTER_SANITIZE_STRING);
 echo "Hello, ". $name ."!";
?>
</body>
</html>