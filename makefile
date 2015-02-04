all: create_env run

create_env:
	@if [ ! -d ".env" ]; then virtualenv --python=python2.7 --no-site-packages .env; fi;
	. .env/bin/activate && \
	pip install -r Requirements/requirements.txt

run:
	. .env/bin/activate && python Desafio/manage.py runserver
