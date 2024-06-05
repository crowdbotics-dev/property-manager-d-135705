#!/bin/bash

python manage.py migrate --noinput

waitress-serve --port=$PORT property_manager_d_135705.wsgi:application
