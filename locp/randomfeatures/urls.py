from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('credit_tier/', views.post_ct, name="credit_tier" ),
    path('patch_deets/', views.patch_deets, name="patch_deets" ),
    path('get_all_users/', views.get_all_users, name="get_all_users" ),
    path('get_user/', views.get_user, name="get_user" ),
]
