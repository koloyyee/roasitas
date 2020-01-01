"""project_roasitas URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth.models import User
from django.urls import path, include
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from rest_framework import routers, serializers, viewsets
from news import views as newsViews
from subscription import views as subscriptionViews
from news.models import Writer, News
from subscription.models import EmailMember
from news.serializers import WriterSerializer, NewsSerializer
from subscription.serializers import EmailMemberSerializer


router = routers.DefaultRouter()
router.register(r'writers', newsViews.WriterViewSet)
router.register(r'blog', newsViews.NewsViewSet)
router.register(r'subscription', subscriptionViews.EmailMemberViewSet)


urlpatterns = [
    path('', include('pages.urls')),
    path('news/', include('news.urls')),
    path('news/<pk>/', include('news.urls')),
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


