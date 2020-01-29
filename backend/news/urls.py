from django.urls import path
from . import views

app_name = 'news'

urlpatterns = [
    # path('all_news/', views.all_news, name='all_news'),
    # path("article/<int:pk>/", views.detail, name="detail"),
    # path("post/create/", views.create_news, name="create_news"),
    # path("article/<slug:slug>/", views.detail, name="detail"),

    path('', views.AllNewsView.as_view(), name='all_news'),
    path('user/<str:username>', views.AllUserNewsView.as_view(), name='all_user_news'),
    path("article/create/", views.CreateNewsView.as_view(), name='create'),
    path('article/<int:pk>/', views.DetailNewsView.as_view(), name='detail'),
    path('article/<int:pk>/update/', views.UpdateNewsView.as_view(), name='update'),
    path('article/<int:pk>/delete/', views.DeleteNewsView.as_view(), name='delete'),

]
