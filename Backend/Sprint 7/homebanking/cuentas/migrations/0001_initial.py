# Generated by Django 4.2.7 on 2023-11-16 21:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clientes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cuenta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('balance', models.DecimalField(decimal_places=2, max_digits=10)),
                ('iban', models.CharField(max_length=100)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='clientes.cliente')),
                ('tipo', models.CharField(max_length=50)),
            ],
        ),
    ]
