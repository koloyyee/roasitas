from django.urls import path
from . import views

app_name = 'news'

urlpatterns = [
    path('', views.ArticleView.as_view(), name='index'),
    path('<pk>', views.DetailView.as_view(), name='detail')

]
