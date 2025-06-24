from django.http import HttpResponse
from django.shortcuts import render
from newapp.models import MyTVChoice 
def home(request):
   # return HttpResponse("Hello from Home page")
    tvShows = MyTVChoice.objects.all()
    return render(request, 'website/index.html' , {'tvShows': tvShows})

def about(request):
    #return HttpResponse("Hello from About page")
    return render(request, 'website/about.html' )

def contact(request):
    #return HttpResponse("Hello from Contact page")   
    return render(request, 'website/contact.html' ) 

