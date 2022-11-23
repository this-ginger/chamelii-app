# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import LoginForm, SignUpForm

# Import Users Model
from .models import Users
# Import templates
from django.template import loader



def login_view(request):
    form = LoginForm(request.POST or None)

    msg = None

    if request.method == "POST":

        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)

                request.session["username"] = username # Session Variable that stores current logged on users username

                # THIS IS HARD CODED AND SHOULD NOT BE IMPLEMENTED LIVE
                # Checks if user is admin account and either redirects them to dashboard or to profile page
                if username == "RoryCameron":
                    print("THIS IS AN ADMIN")
                    return redirect("/")
                else:
                    print("THIS IS NOT AN ADMIN")
                    return redirect("/profile.html")
                    
            else:
                msg = 'Invalid credentials'
        else:
            msg = 'Error validating the form'

    return render(request, "accounts/login.html", {"form": form, "msg": msg})


def register_user(request):
    msg = None
    success = False

    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            # Changed to username1 to avoid possible clashing and having to migrate again
            username1 = form.cleaned_data.get("username")
            raw_password = form.cleaned_data.get("password1")
            user = authenticate(username=username1, password=raw_password)

            msg = 'User created successfully.'
            success = True
            
            # Adding user to users database
            usersInstance = Users.objects.create(username=username1, mood=5)

            # return redirect("/login/")

        else:
            msg = 'Form is not valid'
    else:
        form = SignUpForm()

    return render(request, "accounts/register.html", {"form": form, "msg": msg, "success": success})

