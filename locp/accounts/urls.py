from django.urls import path

from . import views
from django.conf.urls import include

urlpatterns = [
    path('register/', views.UserRegisterAPI.as_view(), name = 'registration'),
    path('login/', views.LoginAPI.as_view(), name = 'login'),
    path('email-verify/', views.EmailVerify.as_view(), name = 'email-verify'),
]