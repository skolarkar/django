Python – Djang0 – A full stack application platform

How to create environment –
1.	Install uv – pip install uv
2.	Then install all software with uv like – 
3.	Uv  venv – for creating environment
4.	Activate venv ( may need Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser)
5.	Then run  -  uv pip install Django
6.	Then create the project with Django admin 
7.	Django admin startproject(first time) then Django admin startapps

 
8.	Create Views
9.	Create urls by importing Views and writing paths
10.	Create Templates folder and static folders at the root folder.
11.	Template may have subfolders like website
12.	Create apps with python manage.py startapp newappname(no -)
13.	Make main project aware of new app by setting INSTALL_APP in setting.py
14.	You can create a new template file within new app
15.	And again a folder that names exactly same as new app – newapp
16.	Inside this will have all html templates for new app
17.	Create view in views.py of newapp
18.	Then create “urls.py” for new app.
19.	 Then add path for this urls file, into project “urls.py”
20.	Jinja – templating engine use of blocks, templates and using it in actual HTML files.
21.	pip install 'django-tailwind[reload]' for tailwind
22.	python manage.py tailwind init
23.	Add to setting file:    
   'tailwind',
    'theme',  # Add this
    'django_browser_reload',
]
# Add these settings
TAILWIND_APP_NAME = 'theme'

INTERNAL_IPS = [
    "127.0.0.1",
]
24.	Add following lines into your layout.py from theme/template/bae.html
{% load static tailwind_tags %}
{% tailwind_css %}

25.	Add configuration for reload if not production code
26.	python .\manage.py createsuperuser for creating user
27.	visit 127.0.0.1:8000/admin
28.	login with credentials
29.	python .\manage.py changepassword
30.	DATABASE - Inside setting.py. Also has URL to Django connecting to different database information like postgeSQL, MySQL etc.
31.	MODELS – Models are for individual Apps. 
from django.db import models
from django.utils import timezone

# Create your models here.
class MyTVChoice(models.Model):
    TV_TYPE_CHOICE = [
        ('ME', 'Mea'),
        ('MP', 'My Little Pony'),
        ('PP', 'Peppa Pig'),
        ('SF', 'Sofia the First'),
        ('PW', 'Paw Patrol'),
    ]
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to= 'series/', default='series/default.jpg')
    date_added = models.DateTimeField(default=timezone.now)
    series = models.CharField(max_length=2,choices= TV_TYPE_CHOICE)
32.	
33.	 Add to setting. Py of project not app-
#For images
MEDIA_URL = '/media/'
MEDIA_ROOT = [BASE_DIR / "media",]
34.	 Add to Urls.py of project
from django.conf import settings
from django.conf.urls.static import static
35.	  ADD
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from django.conf import settings
from django.conf.urls.static import static
from . import views

def devtools_json(request):
    return JsonResponse({})
urlpatterns = [
    path('admin/', admin.site.urls),
     path('', views.home, name="home" ),
      path('about/', views.about, name="about"),
       path('contact/', views.contact, name="contact"),
        path('newapp/', include('newapp.urls')),
 # Suppress Chrome DevTools request
    path('.well-known/appspecific/com.chrome.devtools.json', devtools_json),

   # path("__reload__/", include("django_browser_reload.urls")),

] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

36.	RUN
a.	python manage.py makemigrations newapp
b.	python manage.py migrate
Check file  - 0001_initial.py as – 

import django.utils.timezone
from django.db import migrations, models

class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyTVChoice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(default='series/default.jpg', upload_to='series/')),
                ('date_added', models.DateTimeField(default=django.utils.timezone.now)),
                ('series', models.CharField(choices=[('ME', 'Mea'), ('MP', 'My Little Pony'), ('PP', 'Peppa Pig'), ('SF', 'Sofia the First'), ('PW', 'Paw Patrol')], max_length=2)),
            ],
        ),
    ]




37.	Update admin.py file for new Object.
from django.contrib import admin
from .models import MyTVChoice

# Register your models here.
admin.site.register(MyTVChoice)



