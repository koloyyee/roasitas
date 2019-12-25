# from django.contrib.auth.models import User, Group
from .models import Writer, News
from rest_framework import serializers

class WriterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Writer
        fields = ['name']


class NewsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = News
        fields = ['headline','writer','news_content','image','pub_date']