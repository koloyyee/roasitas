# from django.contrib.auth.models import User, Group
from .models import Writer, News
from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="user-detail")
    class Meta:
        model = User
        fields = ['url','username']


class NewsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = News
        fields = ['slug','headline','writer','news_content','image','pub_date']
        extra_field_kwargs = {'url':{'lookup_field':'slug'}}