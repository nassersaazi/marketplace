# Generated by Django 4.0.6 on 2022-07-27 07:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='content',
        ),
    ]
