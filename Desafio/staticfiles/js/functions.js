$(document).ready(function(){
	var cont = 0;
	$('.campoPesquisa').keyup(function( event ) {
		// alert( $(this).val().length );
		if ($(this).val().length == 0) {
        	$('.resultado').removeClass('is-active');
    	}
    	else {
			$('.resultado').addClass('is-active');
		}
	});
});