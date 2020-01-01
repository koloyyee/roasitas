from django.shortcuts import render
from .models import EmailMember
from django.views.generic.edit import FormView
from rest_framework import viewsets
from .serializers import EmailMemberSerializer

class EmailMemberView(FormView):
    template_name = 'email_member.html'
    form_class = EmailMember
    success_url = "/thanks/"

class EmailMemberViewSet(viewsets.ModelViewSet):
    queryset = EmailMember.objects.all()
    serializer_class = EmailMemberSerializer
