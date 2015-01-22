from django.template import Context, loader
from busca.models import Hightlights
from django.http import HttpResponse

def index(request):
	latest_poll_list = Hightlights.objects.all()
	t = loader.get_template('index.html')
	c = Context({
	    'json': latest_poll_list,
	})
	return HttpResponse(t.render(c))