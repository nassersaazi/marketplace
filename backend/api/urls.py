
from django.urls import path
from .views import ServiceList, ServiceDetail , CreateService, EditService, AdminServiceDetail, DeleteService

app_name = 'api'

urlpatterns = [
    path('<str:pk>/', ServiceDetail.as_view(), name='detailservice'),
    path('', ServiceList.as_view(), name='listservice'),
    # path('search/', PostListDetailfilter.as_view(), name='searchpost'),
    
    # Service Admin URLs
    path('admin/create/', CreateService.as_view(), name='createservice'),
    path('admin/edit/postdetail/<int:pk>/', AdminServiceDetail.as_view(), name='admindetailservice'),
    path('admin/edit/<int:pk>/', EditService.as_view(), name='editservice'),
    path('admin/delete/<int:pk>/', DeleteService.as_view(), name='deleteservice'),
]