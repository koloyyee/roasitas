from django.db.models import Q
import django_filters
from news.models import News 

"""
    filter is where to do search in GraphQL
"""

class NewsFilter(django_filters.FilterSet):
    search  = django_filters.CharFilter(method="filter_search")

    class Meta:
        model = News
        fields = ()
    
    def filter_search(search, queryset, name, value):
        return queryset.filter(
            Q(headline__icontains=value) | Q(news_content__icontains= value) # here is the search_field
        )

