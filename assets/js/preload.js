$('header').on('mouseover', function () {
	$(this).parent().addClass('is-hover');
}).on('mouseout', function () {
	$(this).parent().removeClass('is-hover'); //$(this).parent().removeClass('is-hover');
	console.log("function ()");
});
/*
$(window).load(function () {
	$("body").removeClass("preload");
});
*/