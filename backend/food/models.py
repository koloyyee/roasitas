from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator

class Category(models.Model):
    id = models.AutoField( primary_key=True)
    slug = models.SlugField(max_length=200)
    name = models.CharField(max_length=250, null=False, unique = True)

    def __str__(self):
        return self.name

class Family(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, null=False, unique = True)
    genus = models.CharField(max_length=200, null=False, unique = True)
    
    def __str__(self):
        return self.family

class Ingredient(models.Model):
    id = models.AutoField( primary_key=True)
    slug = models.SlugField(max_length=100)
    name = models.CharField(max_length=100, null=False, unique = True)
    family_id = models.ForeignKey(Family, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/ingredient', null=True)

    def __str__(self):
        return self.name


# class Recipe(models.Model):
#     id = models.AutoField( primary_key=True)
#     slug = models.SlugField(max_length=100)
#     name = models.CharField(max_length=100, null=False, unique = True)
#     category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
#     steps = models.TextField(null=False)

#     def __str__(self):
#         return self.name

class MeasurementUnit(models.Model):
    ML = "ml"
    L = "l"
    G = "g"
    KG = "kg"
    
    METRIC_CHOICE=[
        (ML , "ml"),
        (L , "l"),
        (G , "g"),
        (KG , "kg"),
    ]

    class ImperialChoice(models.TextChoices):
        CUPS = "cups", _('Cups')
        TABLESPOON = "tbsp", _('Tablespoon')
        TEASPOON = "tsp", _('Teaspoon')
        S_OUNCE = "solid oz.", _('Solid oz.')
        F_OUNCE = "fluid oz.", _('Fluid oz')

    recipe_ingredient = models.ForeignKey("RecipeIngredient", related_name="measurement_unit", on_delete=models.CASCADE, null=True)
    ingredient = models.ForeignKey("Ingredient", related_name="measurement_unit", on_delete=models.CASCADE, null=True)
    amount = models.FloatField(validators=[MinValueValidator(0)], default=0)
    unit = models.CharField(max_length=10, choices = METRIC_CHOICE, default = G)
    # unit = models.CharField(max_length=2,
    #                         choices=METRIC_CHOICE
    #                         )

class RecipeIngredient(models.Model):
    id = models.AutoField( primary_key=True)
    slug = models.SlugField(max_length=200, blank=True)
    # recipe_id = models.ForeignKey(Recipe,on_delete=models.CASCADE, default=0)
    ingredients = models.ManyToManyField('Ingredient', through = "MeasurementUnit", related_name="RecipeIngredient")
    steps = models.TextField(null= False, default="")
    category = models.ForeignKey('Category', on_delete=models.CASCADE, default=1)
    image = models.ImageField(upload_to='images/dish', null=True)
    confirmed = models.BooleanField(default=False)
    last_update = models.DateTimeField(auto_now= True)
    
    def __str__(self):
        return self.recipe

class Menu(models.Model):
    id = models.AutoField(primary_key = True)
    dish = models.ForeignKey(RecipeIngredient, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
