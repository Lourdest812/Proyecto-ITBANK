from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, forms
from django.contrib import messages


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, 'Inicio de sesión exitoso.')
            return redirect('home')
        else:
            messages.error(request, 'Credenciales inválidas. Por favor, intenta de nuevo.')

    return render(request, 'registration/login.html', {"form": forms.AuthenticationForm})


def logout_view(request):
    logout(request)
    return render(request, 'registration/logout.html')
