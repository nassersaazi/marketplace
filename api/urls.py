
from django.urls import path
from .views import ServiceList, ServiceDetail

app_name = 'api'

urlpatterns = [
    path('<int:pk>/', ServiceDetail.as_view(), name='detailcreate'),
    path('', ServiceList.as_view(), name='listcreate'),
]