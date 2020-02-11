from graphene_django import DjangoObjectType
from news.models import News

# setting types for GraphQL and Django


class NewsType(DjangoObjectType):
    class Meta:
        model = News
        only_fields = (
            "slug",
            "headline",
            "news_content",
            "writer",
            "image",
            "pub_date",
        )
        use_connection = True