# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django import template
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from django.contrib.auth.models import User
from django.shortcuts import render
import math

@login_required(login_url="/login/")
def status(request):
    t = User.objects.all()
    i = 0
    totalScore = [0] * len(t)
    amountOfTexts = []
    
    
    for user in t:
        amountOfTexts.append(len(user.mood_set.all()))
        for moods in user.mood_set.all():
            totalScore[i] += moods.mood
        i += 1
    
    i = 0
    for mood in totalScore:
        if totalScore[i] != 0 and amountOfTexts[i] != 0:
            totalScore[i] = math.trunc(totalScore[i] / amountOfTexts[i])
            print(totalScore[i])
        i += 1;
        
    everything = zip(t, totalScore)
    
    print(everything)
    
    return render(request,'home/status.html',
        {'everything':everything})
    ##html_template = loader.get_template('home/status.html')
    ##return HttpResponse(html_template.render(context, request)), render({'t': t})
