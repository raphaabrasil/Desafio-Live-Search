$(document).ready(function(){
	$('.campoPesquisa').keyup(function( event ) {
		$('.termoPesquisado').html($(this).val());

		if ($(this).val().length == 0) {
        	$('.resultado').removeClass('is-active');
    	}
    	else {
			$('.resultado').addClass('is-active');
		}
	});
});