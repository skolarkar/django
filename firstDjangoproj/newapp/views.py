from django.shortcuts import render
from .models import MyTVChoice 
# Create your views here.
def allTeas(request):
    tvShows = MyTVChoice.objects.all()
    return render(request, 'newapp/teas.html',{'tvShows': tvShows})
