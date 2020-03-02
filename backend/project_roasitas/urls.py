
from django.contrib import admin
from django.contrib.auth.models import User
from django.urls import path, include, reverse_lazy
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.views.decorators.csrf import csrf_exempt

from rest_framework import routers, serializers, viewsets
from news.models import  News
from news.serializers import UserSerializer, NewsSerializer

# views
from news import views as news_views
from graphene_django.views import GraphQLView
from users import views as users_view 
from django.contrib.auth import views as auth_views
from mep import views as mep_views

router = routers.DefaultRouter()
router.register(r'user', news_views.UserViewSet)
router.register(r'news', news_views.NewsViewSet)
router.register(r'mep/status', mep_views.StatusViewSet)
router.register(r'mep/tasks', mep_views.TasksViewSet)






urlpatterns = [
    path('',include('news.urls', namespace="news")),
    path('admin/', admin.site.urls),
    path('register/', users_view.register, name='register'),
    path('profile/', users_view.profile, name='profile'),
    path('accounts/', include('django.contrib.auth.urls')),
    
    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
    path('polls/', include('polls.urls')),

    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('/tinymce/', include('tinymce.urls')),
    
    # GraphQL
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),

] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    # urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)