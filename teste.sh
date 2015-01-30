#!/bin/bash
if [ ! -d ".env" ]; then
    virtualenv --python=python2.7 --no-site-packages .env
    source ./.env/bin/activate
fi
source ./.env/bin/activate
