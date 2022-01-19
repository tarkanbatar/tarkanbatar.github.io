<?php
    include 'db_connection.php';
    include 'notification.php';

    if(isset($_POST["action"]) &&  $_POST["action"]=="saveOneSignal"){
        $userID = $_POST["userID"];
        die($userID);
       // checkUserId($userID);
    }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
	  <!-- Global site tag (gtag.js) - Google Analytics -->
	  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162175410-1"></script>
	  <script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-162175410-1');
	  </script>
      <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
      <script>
          window.OneSignal = window.OneSignal || [];
          OneSignal.push(function() {
              OneSignal.init({
                  appId: "c638187f-099b-4cb6-aae4-43eb1ee2dd40",
              });
          });
      </script>
	  <script>
	  OneSignal.push(function(){
          	OneSignal.showHttpPrompt();
       		OneSignal.getUserId().then(function(userId){
            	console.log("OneSignal User ID:", userId);
                sessionStorage.setItem("userID",userId);
                    if ((sessionStorage.getItem("userID")).match("^[a-zA-Z0-9-]*$")) {
                        if( sessionStorage.getItem("userID") !=null ){
                            $.post("",{"action":"saveOneSignal", "userID":userId }).then(function(resp){
                                if( resp=="OK"){
                                    sessionStorage.addItem("oneSignal", userId);
                                }
                            })
                        }
                    } else
                        console.log("User ID not valid!");
            });
	  });
	  </script>
    <title> Tarkan Batar</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet">

    <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css">
    <link rel="stylesheet" href="css/animate.css">
    
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">

    <link rel="stylesheet" href="css/aos.css">

    <link rel="stylesheet" href="css/ionicons.min.css">

    <link rel="stylesheet" href="css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="css/jquery.timepicker.css">

    
    <link rel="stylesheet" href="css/flaticon.css">
    <link rel="stylesheet" href="css/icomoon.css">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>

	<div id="colorlib-page">
		<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
		<aside id="colorlib-aside" role="complementary" class="js-fullheight text-center">
			<h1 id="colorlib-logo"><a href="index.html">
			</a></h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul>
					<li class="colorlib-active"><a href="index.php">Home</a></li>
					<li><a href="travel.php">Travel</a></li>
					<li><a href="about.php">About</a></li>
					<li><a href="contact.php">Contact</a></li>
				</ul>
			</nav>

			<div class="colorlib-footer">
				<p>
				<ul>
					<li><a href="https://www.twitter.com/tarkanbatar" target="_blank"><i class="icon-twitter"></i></a></li>
					<li><a href="https://www.facebook.com/tarkanbatar61" target="_blank"><i class="icon-facebook"></i></a></li>
					<li><a href="https://www.linkedin.com/in/tarkanbatar" target="_blank"><i class="icon-linkedin"></i></a></li>
					<li><a href="https://www.github.com/tarkanbatar" target="_blank"><i class="icon-github"></i></a></li>
				</ul>
			</div>
		</aside> <!-- END COLORLIB-ASIDE -->
		<div id="colorlib-main">
			<div class="hero-wrap js-fullheight" style="background-image: url(images/bg_1.jpg);" data-stellar-background-ratio="0.5">
				<div class="overlay"></div>
				<div class="js-fullheight d-flex justify-content-center align-items-center">
					<div class="col-md-8 text text-center">


						<div class="img mb-4" style="background-image:  url(images/tarkan.jpg);"></div>
						<div class="desc">
							<h2 class="subheading">Hi! I'm</h2>
							<h1 class="mb-4">Tarkan Batar</h1>
							<p class="mb-4">I am a Computer Science and Engineering last year student at Marmara University and Software Developer for incehesap.com / Oxyd Information Technologies Company. Basically, I can describe myself as a passionate, determined and curious person. Living in Üsküdar/İstanbul. </p>
							<p><a href="about.html" class="btn-custom">More About Me <span class="ion-ios-arrow-forward"></span></a></p>
							<ul class="ftco-social mt-3">
								<li class="ftco-animate"><a href="https://www.twitter.com/tarkanbatar" target="_blank"><span class="icon-twitter" ></span> </a></li>
								<li class="ftco-animate"><a href="https://www.instagram.com/tarkanbatar" target="_blank"><span class="icon-instagram"></span></a></li>
								<li class="ftco-animate"><a href="https://www.linkedin.com/in/tarkanbatar" target="_blank"><span class="icon-linkedin"></span></a></li>
								<li class="ftco-animate"><a href="https://www.github.com/tarkanbatar" target="_blank"><span class="icon-github"></span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</div><!-- END COLORLIB-MAIN -->
	</div><!-- END COLORLIB-PAGE -->

  <!-- loader -->
  <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>


  <script src="js/jquery.min.js"></script>
  <script src="js/jquery-migrate-3.0.1.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.easing.1.3.js"></script>
  <script src="js/jquery.waypoints.min.js"></script>
  <script src="js/jquery.stellar.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/jquery.magnific-popup.min.js"></script>
  <script src="js/aos.js"></script>
  <script src="js/jquery.animateNumber.min.js"></script>
  <script src="js/bootstrap-datepicker.js"></script>
  <script src="js/jquery.timepicker.min.js"></script>
  <script src="js/scrollax.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
  <script src="js/google-map.js"></script>
  <script src="js/main.js"></script>
    
  </body>
</html>
