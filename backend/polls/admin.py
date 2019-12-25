from django.contrib import admin
from .models import Question, Choice

class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3

class QuestionAdmin(admin.ModelAdmin):
    fieldsets=[
        ('Question Input', {'fields':['question_text']}),
        ('Date Information',{'fields':['pub_date']}),
    ]
    inlines = [ChoiceInline]
    # list_display is the base, find out other options on the documentation.
    # list_display=('question_text', 'pub_date', 'was_published_recently')
    list_filter=['pub_date']
    search_fields = ['question_text']
    


admin.site.register(Question, QuestionAdmin)


