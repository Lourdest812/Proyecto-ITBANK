# Generated by Django 4.2.7 on 2023-11-16 22:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0002_remove_clienteclassic_cliente_ptr_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='cliente',
            name='tipo_cliente',
            field=models.CharField(choices=[('BLACK', 'BLACK'), ('GOLD', 'GOLD'), ('CLASSIC', 'CLASSIC')], default='CLASSIC', max_length=10),
        ),
    ]
