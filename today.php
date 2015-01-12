<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Today&rsquo;s Date</title>
  </head>
  <body>
    <p>Today&rsquo;s time and date (according to this web server) is
      <?php


        $dt = new DateTime();
        echo $dt->format('H:i ');
        echo date('l, F jS Y.');


      ?>
    </p>
  </body>
</html>
