from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Service(models.Model):

    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=250)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date='creationdate')
    creationdate = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='blog_posts')
    status = models.CharField(
        max_length=10, choices=options, default='published')
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title



        '''
        Service {ID, Name, Domain, Category, Description, Provider, Type (Order, Open Access), Web Page, Availability (Countries), Helpdesk, Helpdesk Email, Users, Image}
Category {ID, Name, Description}
Domain {ID, Name, Description}
Provider {ID, Name, Description, Country, Website}
Users {ID, Name, Description}
User {ID, Username, Email,  First Name, Last Name, Password, Role}
Role {ID, Name (rren, provider, normal), Description}
[We may need the provider portal that allows us (or the providers) to add resources/services to the marketplace]
        '''
