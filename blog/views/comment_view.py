# from django.shortcuts import render
from rest_framework import generics
from blog.models import Comment
from blog.serializers import CommentSerializer
from blog.views.pagination import CommentPagination

class CommentView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    pagination_class = CommentPagination

class CommentManageView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
