from django.db import models

class EmailMember(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length= 150)
    email = models.EmailField(max_length = 250, unique = True )
    subscribed = models.BooleanField(default = True, auto_created= True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email