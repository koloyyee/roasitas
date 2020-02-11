from graphene import Argument, Field, ID, ObjectType, Schema, String
from graphene_django.filter import DjangoFilterConnectionField
from news.models import News
from .news.types import NewsType
from .news.filters import NewsFilter
from .news.mutations import NewsCreate, NewsDelete
from .users.types import UsersType
from .users.filters import UsersFilter

"""
    Here is similar a store, where everything meet, 
    Query, Mutation of News,
    so here is the portal to fetch data and insert data


"""


class Query(ObjectType):
    allNews= DjangoFilterConnectionField(NewsType, filterset_class = NewsFilter)
    news = Field(NewsType, id = Argument(ID, required=True)) # Field( 'type', 'id')

    users  = DjangoFilterConnectionField(UsersType, filterset_class = UsersFilter)
    user  = Field(UsersType, id = Argument(ID, required = True))

    def resolve_all_news(root, info, **kwargs):
        return News.objects.all()
    def resolve_news(root, info, **kwargs):
        return News.objects.get(id = kwargs.get('id'))

    def resolve_all_users(root, info, **kwargs):
        return Users.objects.all()
    def resolve_user(root, info, **kwargs):
        return Users.objects.get(username = kwargs.get('username'))


class Mutation(ObjectType):
    news_create =  NewsCreate.Field()
    news_delete =  NewsDelete.Field()

schema = Schema(query=Query, mutation = Mutation)

