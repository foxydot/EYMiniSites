$(function(){window.location.hash&&($(".panel").css("z-index",0),$(window.location.hash).css("z-index",300)),$(".subscreen-option").click(function(){var e=$(this).attr("href");$(".panel").css("z-index",0),$(e).css("z-index",300),$(e).find(".animate").each(function(){var e=$(this),n=e.clone(!0);e.addClass("oldone"),e.before(n),$(".oldone").remove()})}),$(".interstitial a").click(function(){var e=$(this).attr("href");if($(e).hasClass("animate")){var n=$(e),a=n.clone(!0);a.css("opacity",1),n.addClass("oldone"),n.before(a),$(".oldone").remove()}else if("#next"===e){var o=$(this).parents(".carousel");o.carousel("next"),o.on("slid.bs.carousel",function(){var e=$(this).find(".active").find(".animate:first"),n=e.clone(!0);n.css("opacity",1),e.addClass("oldone"),e.before(n),$(".oldone").remove()})}}),$(".panel .carousel").carousel({interval:!1})});