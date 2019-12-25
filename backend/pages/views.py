from django.shortcuts import render
from django.views import generic
from news.models import News

class IndexView(generic.ListView):
    template_name = 'pages/index.html'
    context_object_name = "latest_news"
    def get_queryset(self):
        return News.objects.order_by('-pub_date')[:6]

class DetailView(generic.DetailView):
    model = News
    template_name = 'news/detail.html'