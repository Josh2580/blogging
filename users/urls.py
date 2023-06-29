from django.urls import path
from users.views import (
    MyTokenObtainPairView, SingleUserProfile, AllUsers, RegisterUser, MyUserProfile
)

from rest_framework_simplejwt.views import (
    # TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [

    path('profile/<str:pk>/', SingleUserProfile.as_view(), name='single_user_profile'),
    path('profile/', MyUserProfile.as_view(), name='my_user_profile'),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('', AllUsers.as_view(), name='all_users'),
    path('register/', RegisterUser.as_view(), name='register_users'),



]