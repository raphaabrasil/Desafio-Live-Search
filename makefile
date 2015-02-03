#!/bin/bash

.all: create_venv activate_venv

create_venv:
	@if [ ! -d ".env" ]; then virtualenv --python=python2.7 --no-site-packages .env; fi;

activate_venv:
	@source .env/bin/activate;
	


