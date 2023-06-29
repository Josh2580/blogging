from rest_framework import serializers
from blog.models import Post as Post, Category as Category, Comment
from django.contrib.auth import get_user_model


User = get_user_model()
 


class CommentSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all(), required=True)

    class Meta:
        model = Comment
        fields = '__all__'
        # depth=1
        


class PostSerializer(serializers.ModelSerializer):  
    comment = CommentSerializer(many=True, read_only=True)
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Post
        fields = '__all__'
        

class CategoryPostSerializer(serializers.ModelSerializer):
    post = PostSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'post']     

