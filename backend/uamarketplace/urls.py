from xml.etree.ElementInclude import include
from django.contrib import admin
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('marketplace.urls',namespace='marketplace')),
    path('api/', include('api.urls',namespace='api')),
    path('api/user/', include('users.urls',namespace='users')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('project/docs/', include_docs_urls(title='MarketplaceAPI')),
    path('project/schema', get_schema_view(
        title="MarketplaceAPI",
        description="API for the UA Marketplace",
        version="1.0.0"
    ), name='openapi-schema'),

]
