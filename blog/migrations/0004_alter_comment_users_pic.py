# Generated by Django 4.1.7 on 2023-04-25 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_alter_comment_users_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='users_pic',
            field=models.URLField(blank=True, default='', max_length=255, null=True),
        ),
    ]
