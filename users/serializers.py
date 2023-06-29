from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from blog.models import Post as Post, Category as Category
# from blog.serializers import PostSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    # tokens_for_user = serializers.SerializerMethodField(read_only=True)
    refresh = serializers.SerializerMethodField(read_only=True)
    access = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = [ 'id','username', 'email', 'gender','date_of_birth', 'password','refresh', 'access']

    def validate(self, attrs):
        if User.objects.filter(username=attrs['email']).exists():
            raise serializers.ValidationError({'email': 'email is already in use'})
        return super().validate(attrs)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user

    def get_refresh(self, user):
        refresh = RefreshToken.for_user(user)
        return str(refresh)
 
    def get_access(self, user):
        refresh = RefreshToken.for_user(user)
        return str(refresh.access_token)


class UserSerializer(serializers.ModelSerializer): 
    posts = serializers.PrimaryKeyRelatedField(many=True, queryset=Post.objects.all())
     
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'profile_picture', 
                    'email', 'phone_number', 'gender', 'date_of_birth', 'is_staff','posts']


class MyUserProfileSerializer(serializers.ModelSerializer): 
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'password']
