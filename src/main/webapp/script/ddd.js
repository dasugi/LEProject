$(".slider").slick({
    dots:false,
    prevArrow: $(".prevBtn"),
    nextArrow: $(".nextBtn"),
});
$(".slider-nav").slick({
    dots:false,
    slidesToShow:7,
    asNavFor:".slider",
    focusOnSelect:true,
    centerMode:true,
});

$("#side_slider").slick({
    dots:false,
    slidesToShow:6,
    arrows:true,
    vertical:true,
    prevArrow: $("#pvBtn"),
    nextArrow: $("#ntBtn"),
});
$("#main_slider").slick({
    dots:false,
    asNavFor:"#side_slider",
    prevArrow: $("#pvBtn"),
    nextArrow: $("#ntBtn"),
});

$(document).ready(ntBtn);

$(document).ready(function(){
	$("#tb3").hide();
});
$(function(){
	$("#icon1").click(function() {
		$("#tb3").slideDown();
		$("#icon2").hide();
		$("#icon1").show();
	});
	$("#icon2").click(function(){
		$("#tb3").slideUp();
		$("#icon2").show();
		$("#icon1").hide();
	})
})

