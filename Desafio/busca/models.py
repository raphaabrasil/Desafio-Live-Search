from django.db import models

class Hightlights(models.Model):
	title = models.CharField(max_length=64)
	url = models.CharField(max_length=512)
	logo = models.CharField(max_length=512)
	queries = models.TextField()

	class Meta:
		db_table=u'Suggestions'

class Suggestions(models.Model):
	title = models.CharField(max_length=64)
	
	class Meta:
		db_table=u'Hightlights'

