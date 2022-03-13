from rest_framework import serializers
from .models import *

class CreditTierSerializer(serializers.ModelSerializer):

    class Meta:
        model = CreditTier
        fields = '__all__'