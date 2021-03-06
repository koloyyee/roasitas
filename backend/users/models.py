from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from django.db.models.signals import post_save


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default = 'default.jpg', upload_to='profile_pic')

    def __str__(self):
        return f'{self.user.username} Profile'  

    # For resizing images purposes
    # def save(self, *args, **kwargs):
    #     super(Profile, self).save(*args, **kwargs)
    #     # super().save(*args, **kwargs) correction from corey schafer S3 file upload
    #     img = Image.open(self.image.path)
    #     if img.height > 300 or img.width > 300:
    #         output_size = (300,300)
    #         img.thumbnail(output_size)
    #         img.save(self.image.path)

# def create_profile(sender , **kwargs):
#     if kwargs['created']:
#         profile  = Profile.objects.create(user=kwargs['instance'])
# post_save.connect(create_profile, sender = User)