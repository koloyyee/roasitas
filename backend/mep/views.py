from django.shortcuts import render
from .models import Tasks, Status
from django.http import Http404
from django.contrib.auth.models import User
from .serializers import TasksSerializer, StatusSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import  APIView
from rest_framework.response import Response
from rest_framework import status


class StatusViewSet(ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer


class TasksViewSet(ModelViewSet):
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer

# class TaskDetailView(APIView):
#     def get_objects(self,pk):
#         try:
#             return Tasks.objects.get(pk = pk)
#         except Tasks.DoesNotExist:
#             raise HTTP404
    
#     def get(self, pk, format = None):
#         task = self.get_object(pk)
#         serializer = TasksSerializer(task)
#         return Response(serializer.data)

#     def put(self, request, pk, format = None):
#         task = self.get_object(pk)
#         serializer = TasksSerializer(task, data = request.data)
#         if serializer.is_valid():
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk, format=None):
#         task = self.get_objects(pk)
#         task.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


