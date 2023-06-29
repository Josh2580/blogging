# from django.shortcuts import render
from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from blog.models import Post as Post
from blog.serializers import PostSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
# from rest_framework.decorators import parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from blog.permissions import IsOwnerOrReadOnly
from blog.views.pagination import BlogPagination



# Create your views here.
    
 
class PostView(generics.ListCreateAPIView):
    parser_classes = [MultiPartParser, FormParser]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # pagination_class = BlogPagination
    filter_backends = [filters.OrderingFilter, filters.SearchFilter, DjangoFilterBackend]
    filterset_fields = ['category', 'owner']
    ordering_fields = ['id', 'numberOfViews']
    search_fields = ['title', 'body']
 
    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)
    permission_classes = [IsAuthenticatedOrReadOnly]
    

class ManagePostView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

