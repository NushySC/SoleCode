<?php

// get info
//phpinfo();


echo 'Tomorrow I \'ll learn PHP global variables.<br>';
echo 'This is a bad command : del c:\\*.*';

//-----------------


$var = 'PHP Tutorial';

//---------------------

$name = $_POST['name'];
echo "<h3> Hello,  $name </h3>";

?>

<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <title><?php echo $var; ?> - W3resource!</title>
  </head>
  <body>
  <h3><?php echo $var; ?></h3>
  <p>PHP, an acronym for Hypertext Preprocessor, is a widely-used open source general-purpose scripting language. It is a cross-platform, HTML embedded server-side scripting language and is especially suited for web development.</p>
  <p><a href="https://www.w3resource.com/php/php-home.php">Go to the <?php echo $var; ?></a>.</p>


      <form method='POST'>
   <h2>Your name:</h2>
 <input type="text" name="name">
 <input type="submit" value="Submit Name">
  </form>


</body>
</html>

