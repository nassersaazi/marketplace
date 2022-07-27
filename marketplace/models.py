from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    
    def __str__(self):
        return self.name

class Provider(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    country = models.CharField(max_length=100)
    website = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Service(models.Model):

    options = (
        ('order', 'Order'),
        ('openaccess', 'Open Access'),
    )
    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, default=1)
    domain = models.CharField(max_length=250)
    name = models.CharField(max_length=250)
    description = models.TextField()
    accesstype = models.CharField(
        max_length=10, choices=options, default='openaccess')
    provider = models.ForeignKey(
        Provider, on_delete=models.CASCADE)
    slug = models.SlugField(max_length=250, unique_for_date='creationdate')
    creationdate = models.DateTimeField(default=timezone.now)
    createdby = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='marketplace_services')
    
    objects = models.Manager()  # default manager
    

    class Meta:
        ordering = ('-creationdate',)

    def __str__(self):
        return self.name



        '''
        Service {  Web Page, Availability (Countries), Helpdesk, Helpdesk Email, Users, Image}
Domain {ID, Name, Description}
Users {ID, Name, Description}
User {ID, Username, Email,  First Name, Last Name, Password, Role}
Role {ID, Name (rren, provider, normal), Description}
[We may need the provider portal that allows us (or the providers) to add resources/services to the marketplace]
        '''
