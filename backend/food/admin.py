from django.contrib import admin
from .models import *
from tinymce.widgets import TinyMCE
from django.db import models


class CategoryAdmin(admin.ModelAdmin):
    fields = ("slug","name")

class FamilyAdmin(admin.ModelAdmin):
    fields = ("name", "genus")

class MeasurementUnitAdmin(admin.ModelAdmin):
    field =("unit")


class IngredientAdmin(admin.ModelAdmin):
    fields = ("slug","name", "family", "unit", "image")
    search_field=['name__family']

class RecipeAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            "fields": (
                "slug","name", "category","steps"
            ),
        }),
    )

class RecipeIngredientAdmin(admin.ModelAdmin):
    fields=("slug", "recipe_id", "ingredient_id", "unit_id", "amount", "image", "confirmed", "last_update")
    search_field=['recipe_id__ingredient_id']

    
class MenuAdmin(admin.ModelAdmin):
    fields=("dish", "category")



admin.site.register(Category, CategoryAdmin)
admin.site.register(Ingredient, IngredientAdmin)
# admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Menu, MenuAdmin)
admin.site.register(Family, FamilyAdmin)
admin.site.register(MeasurementUnit, MeasurementUnitAdmin)
admin.site.register(RecipeIngredient, RecipeIngredientAdmin)


    