from django.db.models import Q
import django_filters
from django.contrib.auth.models import User


class UsersFilter(django_filters.FilterSet):
    search = django_filters.CharFilter(method = "filter_search")

    class Meta:
        model = User
        fields = ()

    def filter_search(search, queryset, name, value ):
        return queryset.filter(
            Q(username__icontains = value) | Q(email_icontains= value)
        )