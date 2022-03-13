from rest_framework import serializers
from .models import *

class CreditTierSerializer(serializers.ModelSerializer):
    day = serializers.IntegerField()

    class Meta:
        model = CreditTier
        fields = '__all__'