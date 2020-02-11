from graphene_django import DjangoObjectType
from django.contrib.auth.models import User


class UsersType(DjangoObjectType):
    class Meta:
        model = User
        only_field = {
            "username",
            "email"
        }
        use_connection = True