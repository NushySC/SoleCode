<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Date</title>
    <link rel="stylesheet" type="text/css" href="style.css"
</head>
<body>
    <?php

    $day_of_the_week = date("w");

    switch($day_of_the_week)
    {
        case '1';
        echo "<p>Today is Monday</p>";
        break;

        case '2';
        echo "Today is Tuesday";
        break;

        case '3';
        echo "Today is Wednesday";
        break;

        case '4';
        echo "Today is Thrusday";
        break;

        case '5';
        echo "Today is Friday";
        break;

        case '6';
        echo "<p>Today is Saturday</p>";
        break;

        case '0';
        echo "Today is Sunday";
        break;
    }


    ?>
</body>
</html>