
var interval;
var num=0;
$(document).ready(function() {
	var firstImage= $('.js-slide img:first').attr('stt');
	var lastImage= $('.js-slide img:last').attr('stt');
	

	//event next click
	$("#js-next").click(function clickNext() {
		num++;
		//check change image
		if(num>lastImage){
			num=firstImage;
		}
		var margin_left = -648*num;
		$('.js-slide-wrap').css('margin-left', margin_left +'px');
		$('li').removeClass('active');
		$('li').eq(num).addClass('active');
		clearInterval(interval);
		time();
	});
	//event next click
	$('#js-prev').click(function clickPre() {
		
		num--;
		//check change image
		if(num<firstImage){
			num=lastImage;
		}
		var margin_left = -648*num;
		$('.js-slide-wrap').css('margin-left', margin_left + 'px');
		$('li').removeClass('active');
		$('li').eq(num).addClass('active');
		

	});
	$('ul li img').click(function() {
		num=$(this).attr("stt")-1;
		$('#js-next').click();
	});
	time();
});
function time(){
	interval = setInterval(function(){
		$('#js-next').click();
	},5000)
}
