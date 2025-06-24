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

    def __str__(self):
        return self.name