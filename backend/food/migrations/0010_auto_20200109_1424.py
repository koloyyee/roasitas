# Generated by Django 3.0.1 on 2020-01-09 06:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0009_auto_20200109_1422'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipeingredient',
            name='category',
            field=models.ForeignKey(default='main', on_delete=django.db.models.deletion.CASCADE, to='food.Category'),
        ),
    ]
