from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL
 

# Create your models here.

 
class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name
 

class Post(models.Model):
    owner = models.ForeignKey(User, related_name='posts', on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(Category, related_name='post', on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=255)
    body = models.TextField()
    image = models.ImageField(null=True, blank=True, upload_to='post/')
    date = models.DateTimeField(auto_now_add=True)
    numberOfViews = models.IntegerField(default=0)

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comment', blank=True, null=True, default="" )
    email = models.EmailField(max_length=100, blank=True, null=True, default="")
    name = models.CharField(max_length=100, blank=True, null=True, default="Anonymous")
    message = models.TextField(blank=True, null=True, default="")
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s - %s' %(self.post, self.email)