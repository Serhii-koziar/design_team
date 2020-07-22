$(document).ready(function(){
	$('.title__click').on('click',function(){

		if(!$(this).parent().hasClass('active')){

			$('.services_list_item').removeClass('active');
			$('.services_p').slideUp(300);

			$(this).parent().addClass('active');
			$(this).parent().find('.services_p').slideDown(300);
		}
		else{
			$(this).parent().removeClass('active');
			$(this).parent().find('.services_p').slideUp(300);
		}
	});

});