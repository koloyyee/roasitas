from django.contrib import admin
from .models import News, Writer

class WriterAdmin(admin.ModelAdmin):
    model = Writer

class NewsAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Headline',{'fields': ['headline']}),
        ('News Content',{'fields': ['news_content']}),
        ('Writer',{'fields': ['writer']}),
        ('Image',{'fields': ['image']}),
        ('Publish Date',{'fields': ['pub_date']}),
    ]
    list_filter=['pub_date']
    search_field = ['news_content']

admin.site.register(News, NewsAdmin)
admin.site.register(Writer, WriterAdmin)

    