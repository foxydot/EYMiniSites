<?php
    if(isset($_POST['submit'])){
        $fields = array(
            'ey_name',
            'ey_org',
            'ey_title',
            'ey_email'
        );
        foreach($fields AS $field){
            $myLine .= '"'.$_POST[$field].'",';
        }
        $myLine .= '
';
        $file = 'eyuserstories_capture_data.csv';
        $current = file_get_contents($file);
        $current .= $myLine;
        if(file_put_contents($file, $current)){
            header('Location: presentation.php');
            die();
        }
    }
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="./img/favicon.ico" type="image/x-icon">
        <link rel='stylesheet' id='font-awesome-style-css'  href='https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' type='text/css' media='all' />
        <link rel="stylesheet" href="./css/bootstrap.min.css">
        <style>
            body {
                padding-top: 50px;
                padding-bottom: 20px;
            }
        </style>
        <link rel="stylesheet" href="./css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="./css/main.css">

        <script src="./js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    </head>
    <body>
    <div class="page-container">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
     <main>
         <section class="intro" id="intro">
             <div class="screen">
             <div class="wrap">
                 <div class="row">
                     <div class="col-md-2 logo"><img src="./img/logo.png" class="logo" /></div>
                     <div class="col-md-8 title">
                         <h1></h1>
                     </div>
                 </div>
                 <div class="row">
                     <h2 class="title">EY Digital Insurance Innovation Center: Deployment-ready use cases</h2>
                     <p>EY has developed dozens of deployment-ready, technology-enabled services so insurers can realize the art of the possible – and make digital transformation an operational reality across the industry.</p>
                 </div>
                 <div class="row">
                     <form id="capture_form" class="capture-form" method="POST" action="">
                         <label class="required">Name</label>
                         <input type="text" placeholder="James Dean" class="error" required minlength="2" id="ey_name" name="ey_name" />
                         <label class="required">Company</label>
                         <input type="text" placeholder="Rebel Industries" class="error" required id="ey_org" name="ey_org" />
                         <label class="">Title</label>
                         <input type="text" placeholder="President, CEO" class="" id="ey_title" name="ey_title" />
                         <label class="required">E-Mail</label>
                         <input type="email" placeholder="jimmy@rebel.com" class="error" required id="ey_email" name="ey_email" />
                         <input type="submit" id="submit" name="submit" value="submit" />
                     </form>
                 </div>
             </div>
                 <div class="fill"></div>
             </div>
         </section>
     </main>
        <footer>
            <div class="wrap">
                <div class="row">
                    <?php include_once('footer-legal.php'); ?>
                </div>
            </div>
        </footer>
    </div> <!-- /container -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="./js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

        <script src="./js/vendor/bootstrap.min.js"></script>
        <script src="./js/vendor/jquery.validate.min.js"></script>
        <script src="./js/vendor/jquery.equal-height-columns.js"></script>

        <script src="./js/main.js"></script>
    </body>
</html>
