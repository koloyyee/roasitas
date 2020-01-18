from .models import *
from rest_framework import serializers

class CategorySerializer(serializers.ModelSerializer):
    slug = serializers.SlugRelatedField(slug_field=Category.slug, read_only=True)
    class Meta:
        model = Category
        fields = ['slug', 'name']
        extra_field_kwargs={"url":{'lookup_field':"slug"}}


class FamilySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name', 'genus']


class MeasurementUnitSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MeasurementUnit
        fields = "__all__"

class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = "__all__"
        extra_field_kwargs={"url":{'lookup_field':"slug"}}

class RecipeIngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeIngredient
        fields = "__all__"
        extra_field_kwargs={"url":{'lookup_field':"slug"}}


# class RecipeSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Recipe
#         fields = "__all__"
#         extra_field_kwargs={"url":{'lookup_field':"slug"}}


class MenuSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Menu
        fields = ['name', 'category']
        extra_field_kwargs={"url":{'lookup_field':"slug"}}
        