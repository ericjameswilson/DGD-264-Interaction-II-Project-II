$(document).ready(function(){     
	$('.container-section-heading').click(function(){
		$('.container-inner').slideToggle('4000');
	});
	$('.button-one').click(function(){
	$('.stat-bar-gold-1').delay(100).animate({width:"75%"},'slow');
	$('.stat-bar-gold-2').delay(200).animate({width:"10%"},'slow');
	$('.stat-bar-gold-3').delay(300).animate({width:"60%"},'slow');
	$('.stat-bar-gold-4').delay(400).animate({width:"83%"},'slow');
	$('.stat-bar-gold-5').delay(500).animate({width:"100%"},'slow');
	$(this).css('background','#f9be00');
	});
});
$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#imgframe").fitVids();
  });