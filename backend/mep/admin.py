from django.contrib import admin
from .models import Tasks, Status, Board
from django.db import models


class StatusAdmin(admin.ModelAdmin):
    fieldsets= [("Status", {"fields":['status']})]
    search_field = ['status']


class TasksAdmin(admin.ModelAdmin):
    fieldsets=[
        ("Member", {"fields":['member']}),
        ("Task", {"fields":['task']}),
        ("Status", {"fields":['status']}),

    ]
    list_filter = ['created_date']
    search_field = ['task','status']


class BoardAdmin(admin.ModelAdmin):
    fieldsets= [("Status id", {"fields":['StatusId']})]


admin.site.register(Status, StatusAdmin)
admin.site.register(Tasks, TasksAdmin)
admin.site.register(Board, BoardAdmin)

