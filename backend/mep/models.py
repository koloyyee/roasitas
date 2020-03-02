from django.db import models
from django.contrib.auth.models import User



class Status(models.Model):

    status= models.CharField(max_length=20, default= 'New')

    def __str__(self):
        return self.status

class Tasks(models.Model):
    member = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.TextField()
    status = models.ForeignKey(Status, on_delete= models.CASCADE, related_name='+')
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

class Board(models.Model):
    StatusId = models.ForeignKey(Status, on_delete= models.CASCADE, related_name= 'status_id')
