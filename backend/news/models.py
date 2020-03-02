from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils import timezone
from PIL import Image


class News(models.Model):
    slug = models.SlugField(null=True)
    headline = models.CharField(max_length=250)
    news_content = models.TextField()
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(null=True, upload_to='news_image', )
    pub_date = models.DateField('Published Date', default=timezone.now)
    
    def __str__(self):
        return self.headline

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.image.path)
        if img.height > 600 or img.width > 800:
            output_size = (600, 800)
            img.thumbnail(output_size)
            img.save(self.image.path)

    def get_absolute_url(self):
        return reverse("news:detail", kwargs={"pk": self.pk})
    

class EmailSubscription(models.Model):
    subscriber = models.CharField(max_length=50)
    email = models.EmailField( max_length=254)

    def __str__(self):
        return self.email
        