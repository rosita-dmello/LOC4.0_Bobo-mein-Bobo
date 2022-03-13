from django.db import models
from accounts.models import *
# Create your models here.

class CreditTier(models.Model):

    credits = models.IntegerField(null=True)
    tier = models.CharField(null=True, max_length=20)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.name