$(document).ready( function(){
    $(".tab_item").not(":first").hide();

    $(".nav-tabs .tab-btn").click(function() {
	    $(".nav-tabs .tab-btn").removeClass("current").eq($(this).index()).addClass("current");
	    $(".content .tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("current");
});

/*гугл помагав. не знав шо можна робити отак function(){}.eq(0).addClass("current"). це я так розумію воно бере перший елемент з того шо повертає функція, да? */

