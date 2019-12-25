from django.db import models

class Writer(models.Model):
    name = models.CharField(max_length=250)
    def __str__(self):
        return self.name

class News(models.Model):
    headline = models.CharField(max_length=250)
    news_content = models.TextField()
    writer = models.ForeignKey(Writer, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')
    pub_date = models.DateField('Published Date')
    
    def __str__(self):
        return self.headline