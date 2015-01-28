from django.template import Context, loader
from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
import json

def index(request):
	return render_to_response("index.html", {}, context_instance=RequestContext(request))

def ajax(request):
    data = {
			   "hightlights":[
			      {
			         "titulo":"Pop &amp; Art",
			         "url":"http://g1.globo.com/pop-arte/index.html",
			         "logo":"http://s.glbimg.com/bu/i/fc/5fb2e18d-a47f-4bb8-9a7e-b66871cf53c0.png",
			         "queries":[
			            "musica",
			            "pop",
			            "art",
			            "arte",
			            "cultura",
			            "shows"
			         ]
			      },
			      {
			         "titulo":"Pol&iacute;tica",
			         "url":"http://g1.globo.com/politica/index.html",
			         "logo":"http://s.glbimg.com/bu/i/fc/5fb2e18d-a47f-4bb8-9a7e-b66871cf53c0.png",
			         "queries":[
			            "elei&ccedil;&otilde;es",
			            "pol&iacute;tica",
			            "dilma",
			            "a&eacute;cio",
			            "apura&ccedil;&atilde;o"
			         ]
			      }
			   ],
			   "suggestions":[
			      "futebol brasileiro",
			      "futebol americano",
			      "futebol",
			      "musica",
			      "musicas",
			      "musica inedita de raul",
			      "politica entre dilma e aecio",
			      "politica",
			      "politica macroeconomica"
			   ]
			}
    return HttpResponse(json.dumps(data), content_type = "application/json")