from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets

class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class FamilyView(viewsets.ModelViewSet):
    queryset = Family.objects.all()
    serializer_class = FamilySerializer

class MeasurementUnitView(viewsets.ModelViewSet):
    queryset = MeasurementUnit.objects.all()
    serializer_class = MeasurementUnitSerializer


class IngredientView(viewsets.ModelViewSet):
    lookup_field = "slug"
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

# class RecipeView(viewsets.ModelViewSet):
#     lookup_field = "slug"
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer

class RecipeIngredientView(viewsets.ModelViewSet):
    lookup_field = "slug"
    queryset = RecipeIngredient.objects.all()
    serializer_class = RecipeIngredientSerializer

class MenuView(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

