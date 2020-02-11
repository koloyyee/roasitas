from graphene import Boolean, Field, ID, InputObjectType, Mutation, String
from rest_framework import serializers
from news.models import News
from .types import NewsType

"""
    Mutation is one of the GraphQL feature,
    it is like CRUD like REST API,

    In the tutorial the it uses Django Rest Framework Form Validation to help validation the data before saving
    however with the writer is related with user, currently I am unable to get insert the data,
    but the whole points to validate from form to type before savinggraphene.Abstract()
    

"""


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = (
            "slug",
            "headline",
            "news_content",
            "image",
            "writer",
            "pub_date"
        )

class NewsInputType(InputObjectType):
    slug = String()
    headline = String()
    news_content = String()
    image = String()
    writer = String()
    pub_date = String()

class NewsCreate(Mutation):
    class Arguments:
        input = NewsInputType(required = True )

    news = Field(NewsType)

    @classmethod 
    def mutate(cls, root, info, **data):
        serializers = NewsSerializer(data = data.get("input"))
        serializers.is_valid(raise_exception=True)

        return NewsCreate(news = serializers.save())
class NewsDelete(Mutation):
    class Arguments:
        id = ID(required = True )

    ok = Boolean()

    @classmethod 
    def mutate(cls, root, info, **data):
        news = News.objects.get(id = data.get("id"))
        news.delete()

        return NewsDelete(ok = True)
