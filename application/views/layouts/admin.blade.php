<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 9]><!-->
<html xmlns:ng="http://angularjs.org">
<html class="no-js" lang="en" itemscope itemtype="http://schema.org/Product"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta name="fragment" content="!" />
	<!-- Use the .htaccess and remove these lines to avoid edge case issues.
			 More info: h5bp.com/b/378 -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title>Hackaton Litoral 2013</title>
	<meta name="description" content="Del 11 al 13 de Octubre nos juntamos en Santa Fe a generar soluciones innovadoras para los problemas de la ciudad." />
	<meta name="keywords" content="Hackathon, desarrollo moviles,moviles ciudad,santa fe, innovacion, unl, fich, 2013, hackathon litoral" />
	<meta name="robots" content="Index, All">
	<meta name="robots" CONTENT="Index, Follow">
	<meta name="revisit-after" content="10 days">

	<link rel="shortcut icon" href="favicon.png" type="image/x-icon" />

	<!-- Facebook Metadata /-->
	<meta property="fb:page_id" content="" />
	<meta property="og:image" content="http://fich.unl.edu.ar/hackathon2013/images/logo-hackathon-2013.jpg" />
	<meta property="og:description" content="Del 11 al 13 de Octubre nos juntamos en Santa Fe a generar soluciones innovadoras para los problemas de la ciudad. Inscribite y se parte de la solucion!"/>
	<meta property="og:title" content="#hackatonlitoral 2013"/>

	<!-- Google+ Metadata /-->
	<meta itemprop="name" content="">
	<meta itemprop="description" content="">
	<meta itemprop="image" content="">

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">

  <script src="http://maps.googleapis.com/maps/api/js?sensor=false&amp;language=en"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  <link rel="stylesheet" href="css/gumby.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.css" />



</head>
<body ng-app="App">
  <div class="navbar" id="nav1">
		<div class="row">
			<a class="toggle" gumby-trigger="#nav1 > .row > ul" href="#"><i class="icon-menu"></i></a>
			<h4 class="four columns logo white">
				<a href="/#">#hackatonlitoral</a>
			</h4>
			<ul class="eight columns">
				<li><a href="#/agenda">Agenda</a></li>
				<li><a href="http://fich.unl.edu.ar/hackathon2013/inscripcion.php">Inscribite</a></li>
				<li><a target="_blank" href="http://hacksf2013.hackdash.org/">Subi tu idea!</a></li>
				<li class="icons field white">
					<div class="row">

							<a href="http://www.facebook.com/events/1450927081799187/" target="_blank">
								<i class="icon-facebook-circled icon-big"></i></a>


							<a href="http://twitter.com/hackatonlitoral" target="_blank">
								<i class="icon-twitter-circled icon-big"></i>
							</a>

							<a href="http://tumblr.com/hackatonlitoral" target="_blank">
								<i class="icon-tumblr-circled icon-big"></i>
							</a>

					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="container">
    @yield('content')
  	</div>

	  <div class="wrapper shaded" id="subfoot">
	  	<section class="row">
	      <div class="twelve columns centered">
	      		<p>Copyright © Hackathon Litoral 2013.</p>
	      		<div class="row">

							<a href="http://www.facebook.com/events/1450927081799187/" target="_blank">
								<i class="icon-facebook-circled icon-big"></i></a>


							<a href="http://twitter.com/hackatonlitoral" target="_blank">
								<i class="icon-twitter-circled icon-big"></i>
							</a>

							<a href="http://tumblr.com/hackatonlitoral" target="_blank">
								<i class="icon-tumblr-circled icon-big"></i>
							</a>

					</div>

	       </div>
	  	</section>
	  </div>


  <!-- build:js scripts/scripts.js -->

  <script src="js/frameworks/angular.min.js"></script>
  <script src="js/frameworks/angular-resource.js"></script>
  <script src="js/frameworks/angular-google-maps.js"></script>
  <script src="js/frameworks/angular-seo.js"></script>

  <script src="js/libs/moment.min.js"></script>
  <script src="js/libs/modernizr-2.0.6.min.js"></script>
  <script src="js/libs/gumby.min.js"></script>

  <script src="js/controllers/main.js"></script>
  <script src="js/controllers/agenda.js"></script>
  <script src="js/services/libs/localStorage.js"></script>

  <script src="js/app.js"></script>

  <script src="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js"></script>
  <script src="http://code.jquery.com/jquery-1.9.0.min.js"></script>
  <script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>


  <!-- endbuild -->
</body>
</html>
