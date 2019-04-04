$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	
	$('.moon').css({
		'transform' : 'translate(0px, '+ wScroll /40 + '%)'
	});
	$('.asteroid1').css({
		'transform' : 'translate(0px, '+ wScroll /20 + '%)'
	});
	$('.asteroid1-1').css({
		'transform' : 'translate(0px, -'+ wScroll /20 + '%)'
	});
	$('.asteroid2').css({
		'transform' : 'translate(0px, '+ wScroll /25 + '%)'
	});
	$('.asteroid2-1').css({
		'transform' : 'translate(0px, -'+ wScroll /2 + '%)'
	});
	$('.asteroid3').css({
		'transform' : 'translate(0px, -'+ wScroll /3 + '%)'
	});
	$('.asteroid3-1').css({
		'transform' : 'translate(0px, -'+ wScroll /8 + '%)'
	});
	$('.asteroid5').css({
		'transform' : 'translate(0px, -'+ wScroll /2 + '%)'
	});
	$('.asteroid5-1').css({
		'transform' : 'translate(0px, -'+ wScroll /5 + '%)'
	});
	$('.asteroid6').css({
		'transform' : 'translate(0px, -'+ wScroll/3 + '%)'
	});
	$('.asteroid6-1').css({
		'transform' : 'translate(0px, -'+ wScroll/30 + '%)'
	});
});