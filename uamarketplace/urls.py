from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(('marketplace.urls','marketplace'),namespace='marketplace')),
    # path('api/', include(('api.urls','api'),namespace='api')),

]
