from rest_framework import serializers
from marketplace.models import Service
from django.conf import settings


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id', 'name','description', 'provider','slug', 'category', 'accesstype', 'createdby','creationdate')
        extra_kwargs = {'slug': {'required': False}}
        
class UserRegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = settings.AUTH_USER_MODEL
        fields = ('email', 'user_name', 'first_name')
        extra_kwargs = {'password': {'write_only': True}}