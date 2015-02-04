var teste = function teste () {
	$('.searchbar').addClass('teste');
}

function request_ajax(termo) {
	var req = $.ajax({
		url: "/json/",
		dataType: "json"
	});

	req.done(function(json_data) {
	  var hightlights = json_data.hightlights;
		var suggestions = json_data.suggestions;
		var i = 0;
		var j = 0;
		var k = 0;
		var match;
		var $listTitulo = $('.titulo');
		var $listBusca = $('.busca-json');
		var querieConvertida = '';
		termo = termo.toLowerCase();
		termo = converteTexto(termo);
		resetaBusca($listTitulo, $listBusca);
		for (i = 0; i < hightlights.length; i++) {
			for (j = 0; j < hightlights[i].queries.length; j++) {
				querieConvertida = converteTexto(hightlights[i].queries[j]);
				if(querieConvertida.indexOf(termo) === 0 && termo) {
					criaHeader(hightlights[i], termo, querieConvertida, j, $listTitulo, $listBusca);
					for (k = 0; k < suggestions.length; k++) {
						if (suggestions[k].indexOf(querieConvertida) >= 0) {
							criaRelacionados(suggestions[k], termo, $listBusca);
						}
					}
				}
			}
		}
		checaVazio();
	});

};

function resetaBusca(listTitulo, listBusca) {
	listBusca.html("");
	listTitulo.html("");
}

function criaHeader(caminho, termo, querie, j, listTitulo, listBusca) {
	var popExibido;
	var politicaExibido;
	match = querie.substr(termo.length, querie.length);
	titulo = converteTexto(caminho.titulo);
	if ($('.tituloPop').length === 0 && titulo == "Pop & Art") {
		listTitulo.append('<li class="tituloPop"><a href="' + caminho.url + '"><img class="logo" src="' + caminho.logo + '" /><h1 class="tema">' + caminho.titulo + '</h1></a></li>');
	}
	else if ($('.tituloPolitica').length === 0 && titulo == "Politica") {
		listTitulo.append('<li class="tituloPolitica"><a href="' + caminho.url + '"><img class="logo" src="' + caminho.logo + '" /><h1 class="tema">' + caminho.titulo + '</h1></a></li>');
	}
	listBusca.append('<li><a href="http://g1.globo.com/busca/?q=' + caminho.queries[j] + '"><b>' + termo +'</b>' + match + '</a></li>');
}

function criaRelacionados(caminho, palavra, listBusca) {
	var inicio = caminho.indexOf(palavra);
	matchInicio = caminho.substr(0, inicio);
	matchFim = caminho.substr(inicio + palavra.length, caminho.length);
	listBusca.append('<li><a href="http://g1.globo.com/busca/?q=' + caminho + '">' + matchInicio + '<b>' + palavra + '</b>' + matchFim + '</a></li>');
}

function criaBuscaGeral(palavra) {
	$('.termoPesquisado').html(palavra);
	$('.buscaWeb').attr('href', 'https://www.google.com.br/?gws_rd=ssl#q=' + palavra);
	$('.buscaGlobo').attr('href', 'http://g1.globo.com/busca/?q=' + palavra);

}
function converteTexto(text) {
	return text
		.replace(/&amp;/g, '&')
		.replace(/&aacute;/g, 'a')
		.replace(/&eacute;/g, 'e')
		.replace(/&iacute;/g, 'i')
		.replace(/&oacute;/g, 'o')
		.replace(/&uacute;/g, 'u')
		.replace(/&ccedil;/g, 'c')
		.replace(/&atilde;/g, 'a')
		.replace(/&otilde;/g, 'o')
		.replace(/ç/g, 'c')
		.replace(/[áàã]/g, 'a')
		.replace(/[éèê]/g, 'e')
		.replace(/[íî]/g, 'i')
		.replace(/[óòôõ]/g, 'o')
		.replace(/[úùû]/g, 'u');
}

function checaVazio() {
	var $encontrados = $('.encontrados');
	if ( $('.titulo li').length === 0 ) {
		$encontrados.removeClass('is-active');
	}
	else {
		$encontrados.addClass('is-active');
	}
}

$(document).ready(function() {
	$('.campoPesquisa').keyup(function( event ) {
		var termo = $(this).val();
		request_ajax(termo);
		criaBuscaGeral(termo);
		if (termo.length === 0) {
    	$('.resultado').removeClass('is-active');
    	}
  	else {
			$('.resultado').addClass('is-active');
		}
	});

});
