# Generated by Django 2.2.7 on 2019-11-29 05:32

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='writer',
        ),
        migrations.AddField(
            model_name='news',
            name='writer',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='news.Writer'),
            preserve_default=False,
        ),
    ]
