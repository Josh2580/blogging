# from django.shortcuts import render
from rest_framework import generics
from blog.models import Category as Category, Post as Post
from blog.serializers import CategoryPostSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import APIView 
# # Create your views here.


class CategoryView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryPostSerializer
    # permission_classes = [IsAuthenticated]


class ManageCategoryView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryPostSerializer



