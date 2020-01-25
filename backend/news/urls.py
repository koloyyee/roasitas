from django.urls import path
from . import views

app_name = 'news'

urlpatterns = [
    path('', views.ArticleView.as_view(), name='index'),
    path('<pk>', views.DetailView.as_view(), name='detail')
    # path('', views.index, name='index'),
    # path("<int:news_id>/", views.detail, name="detail_news"),
    # path("<int:news_id>/article", views.article, name="article"),
    # path("<int:news_id>/write", views.write_post, name="write"),

]
