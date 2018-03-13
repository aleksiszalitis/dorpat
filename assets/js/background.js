
$(document).ready(function() {
	var images = ['1001.jpeg', '1002.jpeg', '1003.jpeg', '1004.jpeg', '1005.jpeg', '1006.jpeg', '1007.jpeg', '1008.jpg'];
	$("body").css('background-image', 'url(http://kodu.ut.ee/~viikna/img/' + images[Math.floor(Math.random() * images.length)] + ')');
	//$("body").css('background-image', 'url(http://kodu.ut.ee/~viikna/img/1001.jpeg)');
});