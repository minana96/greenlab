function loadAPI(){var e=document.createElement("script");e.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=520364007975239&version=v2.0",document.body.appendChild(e),fb_loaded=!0}var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35496144-1"]),_gaq.push(["_trackPageview"]);var fb_loaded=!1;window.onscroll=function(){if(!fb_loaded&&null!==document.getElementById("comments")){document.getElementById("comments").getBoundingClientRect().top<window.innerHeight&&loadAPI()}},$(function(){$(window).scroll()}),window.onload=function(){setTimeout(function(){var e=!1;$.each($(".adsbygoogle"),function(t,n){e||0!==$(this).html().replace(/\s/g,"").length||($("<div>").addClass("blocked").html("<p>Ad blocker eh? Yeah, I get it. Unfortunately this site isn't free to do.<b>Perhaps you can whitelist this site, or click 'Donate' below?").insertAfter($(this)),e=!0)})},2e3)};