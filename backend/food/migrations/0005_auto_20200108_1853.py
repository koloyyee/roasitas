# Generated by Django 3.0.1 on 2020-01-08 10:53

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0004_auto_20200108_1721'),
    ]

    operations = [
        migrations.CreateModel(
            name='Family',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('genus', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='MeasurementQty',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('amount', models.FloatField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
            ],
        ),
        migrations.CreateModel(
            name='MeasurementUnit',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('unit', models.CharField(choices=[('ml', 'ml'), ('l', 'l'), ('g', 'g'), ('kg', 'kg')], max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='RecipeIngredient',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('amount', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='food.MeasurementQty')),
                ('ingredient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='food.Ingredient')),
                ('unit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='food.MeasurementUnit')),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('slug', models.SlugField(max_length=200)),
                ('name', models.CharField(max_length=300)),
                ('steps', models.TextField()),
                ('image', models.ImageField(null=True, upload_to='images/dish')),
                ('confirmed', models.BooleanField(default=False)),
                ('last_update', models.DateTimeField(auto_now=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='food.Category')),
                ('recipe_ingredients', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='food.RecipeIngredient')),
            ],
        ),
        migrations.AlterField(
            model_name='ingredient',
            name='family',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='food.Family'),
        ),
        migrations.AlterField(
            model_name='menu',
            name='dish',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='food.Recipe'),
        ),
        migrations.DeleteModel(
            name='Dish',
        ),
    ]