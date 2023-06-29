from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from users.serializers import UserSerializer, RegisterSerializer, MyUserProfileSerializer

from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser


# This is importing the User
from django.contrib.auth import get_user_model
User = get_user_model()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        #Add Custom Claims
        # data['username'] = self.user.username
        # data['email'] = self.user.email
        serializer = UserSerializer(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



class AllUsers(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAdminUser]

# class MyUserProfile(generics.ListAPIView):
#     serializer_class = MyUserProfileSerializer
    
#     def list(self, request):
#         queryset = self.request.user
#         serializer = UserSerializer(queryset, many=False)
#         return Response(serializer.data)
    
#     def put(self, request):
#         data = self.request.data
#         serializer = UserSerializer(data, many=True)
#         return Response(serializer.data)


class SingleUserProfile(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # lookup_field = 'email'
     


class MyUserProfile(generics.ListAPIView):
    serializer_class = UserSerializer

    def list(self, request):
        queryset = self.request.user
        serializer = UserSerializer(queryset, many=False)
        return Response(serializer.data)
        # permission_classes = [IsAuthenticated]

# class UpdateMyUserProfile(generics.Upda)
    
    # def put(self, instance, validated_data, serializer):
    #     instance = validated_data.get(self.request.user, instance)
    #     return instance
        


class RegisterUser(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    queryset = User.objects.all()
   




         