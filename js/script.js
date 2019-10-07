$(document).ready(function(){
	
$('img').click(function(){
$(this).fadeOut(500, function(){
$(this).attr('src', 'img/bilbo2.jpg').fadeIn(500);
});
});

 $('.starz').click(function() {
 $(this).toggleClass('blue');
 });

$('h3').click(function() {
	$('p.hide_me_js').addClass('anno').removeClass('hide_me_js');
});

});
