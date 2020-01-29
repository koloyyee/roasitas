
from django.contrib import admin
from django.contrib.auth.models import User
from django.urls import path, include
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from rest_framework import routers, serializers, viewsets
from news import views as news_views
from news.models import Writer, News
from news.serializers import UserSerializer, NewsSerializer
# from food import views as foodViews
from users import views as users_view 
from django.contrib.auth import views as auth_views

router = routers.DefaultRouter()
router.register(r'user', news_views.UserViewSet)
router.register(r'news', news_views.NewsViewSet)
# router.register(r'food/category', foodViews.CategoryView)
# router.register(r'food/unit', foodViews.MeasurementUnitView)
# router.register(r'food/recipe_ingredient', foodViews.RecipeIngredientView)
# router.register(r'food/ingredient', foodViews.IngredientView)
# router.register(r'food/recipe', foodViews.RecipeView)
# router.register(r'menu', foodViews.MenuView)



urlpatterns = [
    # path('', include('news.urls')),
    path('',include('news.urls', namespace="news")),
    path('admin/', admin.site.urls),
    path('register/', users_view.register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
    path('profile/', users_view.profile, name='profile'),
    path('polls/', include('polls.urls')),

    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('/tinymce/', include('tinymce.urls')),

] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)