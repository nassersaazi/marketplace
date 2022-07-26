from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('marketplace.urls',namespace='marketplace')),
    path('api/', include('api.urls',namespace='api')),

]
