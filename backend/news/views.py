from django.shortcuts import render
from .models import News
from django.template import loader
from django.views import generic
from django.contrib.auth.models import User, Group
from .models import Writer, News
from rest_framework import viewsets
from .serializers import WriterSerializer, NewsSerializer

# class index(request):
#     latest_news_list = News.objects.order_by("-pub_date")[:5]
#     output
# class detail(request, news_id):

# class article(request, news_id):

# class write_post(request, news_id):


class ArticleView(generic.ListView):
    template_name = 'news/index.html'
    context_object_name = 'latest_news'
    def get_queryset(self):
        return News.objects.order_by('-pub_date')[:5]
# def article(request):
#     latest_news = News.objects.order_by('-pub_date')[:5]
#     template = loader.get_template('news/index.html')
#     context = {'latest_news':latest_news}
#     return render(request, 'news/index.html',context)

class DetailView(generic.DetailView):
    model = News
    template_name = 'news/detail.html'


class WriterViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Writer.objects.all()
    serializer_class = WriterSerializer


class NewsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    lookup_field = 'slug'
    queryset = News.objects.all()
    serializer_class = NewsSerializer