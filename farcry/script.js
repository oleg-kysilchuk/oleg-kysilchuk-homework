$(document).ready( function(){
    $(".tab_item").not(":first").hide();

    $(".nav-tabs .tab-btn").click(function() {
	    $(".nav-tabs .tab-btn").removeClass("current").eq($(this).index()).addClass("current");
	    $(".content .tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("current");
});

