

from rest_framework import generics
from marketplace.models import Service
from .serializers import ServiceSerializer

from django.shortcuts import get_object_or_404
from rest_framework import viewsets, filters, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

# Display services

class ServiceList(generics.ListAPIView):
    
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()
    

class ServiceDetail(generics.RetrieveAPIView):
    serializer_class = ServiceSerializer
    
    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Service, slug=item)

# Post Search

# class ServiceListDetailfilter(generics.ListAPIView):
  
#     queryset = Service.objects.all()
#     serializer_class = ServiceSerializer
#     filter_backends = [filters.SearchFilter]
#     # '^' Starts-with search.
#     # '=' Exact matches.
#     search_fields = ['^slug']
    

# Post Admin

class CreateService(generics.CreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]
    authentication_classes = ()
    
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class AdminServiceDetail(generics.RetrieveAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class EditService(generics.UpdateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()

class DeleteService(generics.RetrieveDestroyAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()

""" Concrete View Classes
#CreateAPIView
Used for create-only endpoints.
#ListAPIView
Used for read-only endpoints to represent a collection of model instances.
#RetrieveAPIView
Used for read-only endpoints to represent a single model instance.
#DestroyAPIView
Used for delete-only endpoints for a single model instance.
#UpdateAPIView
Used for update-only endpoints for a single model instance.
##ListCreateAPIView
Used for read-write endpoints to represent a collection of model instances.
RetrieveUpdateAPIView
Used for read or update endpoints to represent a single model instance.
#RetrieveDestroyAPIView
Used for read or delete endpoints to represent a single model instance.
#RetrieveUpdateDestroyAPIView
Used for read-write-delete endpoints to represent a single model instance.
"""