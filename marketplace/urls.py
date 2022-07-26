from django.urls import path
from django.views.generic import TemplateView

app_name = 'marketplace'

urlpatterns = [
    path('', TemplateView.as_view(template_name="marketplace/index.html")),
]