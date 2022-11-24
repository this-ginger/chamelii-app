# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.db import models

# Create your models here.

# Test to Create Users With Mood Rating
class Users(models.Model):
    username = models.CharField(max_length=30)
    mood = models.IntegerField(null=True)
    position = models.CharField(max_length=250, null=True)