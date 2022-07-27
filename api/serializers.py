from rest_framework import serializers
from marketplace.models import Service


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'name', 'provider', 'category', 'accesstype', 'createdby','creationdate')
        model = Service