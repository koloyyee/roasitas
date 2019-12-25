"""
WSGI config for project_roasitas project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project_roasitas.settings')
application = get_wsgi_application()

project_folder = os.path.expanduser('~/project_roasitas')
load_dotenv(os.path.join(project_folder, '.env'))
# python-dotenv was install for the purpose of accessing the .env file