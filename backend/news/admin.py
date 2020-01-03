from django.contrib import admin
from .models import News, Writer, EmailSubscription
from tinymce.widgets import TinyMCE
from django.db import models

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

    formfield_overrides = {
        models.TextField:{'widget': TinyMCE()}
    }

class EmailSubscriptionAdmin(admin.ModelAdmin):
    model = EmailSubscription

admin.site.register(News, NewsAdmin)
admin.site.register(Writer, WriterAdmin)
admin.site.register(EmailSubscription, EmailSubscriptionAdmin)

    