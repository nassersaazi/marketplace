
from django.contrib import admin
from . import models


@admin.register(models.Service)
class CreatedbyAdmin(admin.ModelAdmin):
    list_display = ('name', 'provider', 'category', 'accesstype', 'createdby','creationdate')
    prepopulated_fields = {'slug': ('name',), }


admin.site.register(models.Provider)

admin.site.register(models.Category)