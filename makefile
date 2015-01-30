.all: create_env_votacao

create_env_votacao:
	@if [ ! -d ".env" ]; then virtualenv --python=python2.7 --no-site-packages .env; fi;
	@source .env/bin/activate;