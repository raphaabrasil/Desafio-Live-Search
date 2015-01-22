from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from Desafio import settings

admin.autodiscover()

urlpatterns = patterns('',
	url(r'^$', 'busca.views.index'),
    url(r'^admin/', include(admin.site.urls)),
	) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += staticfiles_urlpatterns()
