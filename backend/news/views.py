from django.shortcuts import get_object_or_404, redirect, render
from django.http import HttpResponse, request
from .models import News
from django.template import loader
from django.views import generic
from django.contrib.auth.models import User, Group
from .models import Writer, News
from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from rest_framework import viewsets
from .serializers import UserSerializer, NewsSerializer

def all_news(request):
    latest_news= News.objects.order_by('-pub_date')
    context = {'latest_news':latest_news}
    return render(request, 'news/all_news.html', context)

def detail(request, pk):
    detail = get_object_or_404(News,pk=pk)
    context = {'detail':detail}
    return render(request, 'news/news_detail.html', context)

def create_news(request):
    form_class = News
    form = form_class
    if request.method == "POST":
        form = form_class(request.POST)
        if form.is_vaild():
            form.save()
            messages.success(request, 'News Article Posted!')
            return redirect('all_news')

    return render(request, 'news/post/create.html', {'form':form})

class CreateNewsView(LoginRequiredMixin, generic.CreateView):
    model = News
    fields = ['slug','headline','news_content','image']

    def form_valid(self, form):
        form.instance.writer = self.request.user
        print(form.instance.writer)
        return super().form_valid(form)

class AllNewsView(generic.ListView):
    model = News
    template_name = 'news/all_news.html' # <app>/<model>_<viewtype>.html
    context_object_name ='latest_news'
    ordering = ['-pub_date']
    paginate_by = 5

   
class AllUserNewsView(generic.ListView):
    model = News
    template_name = 'news/all_user_news.html' # <app>/<model>_<viewtype>.html
    context_object_name ='latest_news'

    paginate_by = 5

    def get_queryset(self):
        user = get_object_or_404(User, username = self.kwargs.get('username'))
        return News.objects.filter(writer = user).order_by('-pub_date')

class UpdateNewsView(LoginRequiredMixin, UserPassesTestMixin, generic.UpdateView):
    model = News
    fields = ['slug','headline','news_content','image']
    context_object_name ="update"


    def form_valid(self, form):
        form.instance.writer = self.request.user
        return super().form_valid(form)
    
    def test_func(self):
        post = self.get_object()
        if self.request.user == post.writer:
            return True
        return False

class DetailNewsView(generic.DetailView):
    model = News
    context_object_name ="detail"

class DeleteNewsView(LoginRequiredMixin, UserPassesTestMixin, generic.DeleteView):
    model = News
    success_url = ''

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.writer:
            return True
        return False



# # def article(request):
# #     latest_news = News.objects.order_by('-pub_date')[:5]
# #     template = loader.get_template('news/index.html')
# #     context = {'latest_news':latest_news}
# #     return render(request, 'news/index.html',context)


# ==========================================
# DRF ViewSet

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class NewsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    lookup_field = 'slug'
    queryset = News.objects.all()
    serializer_class = NewsSerializer