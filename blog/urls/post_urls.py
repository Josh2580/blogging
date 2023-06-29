from django.urls import path
from blog.views.post_view import PostView, ManagePostView
 

urlpatterns = [
    path('', PostView.as_view(), name='list_post_url' ),
    path('<str:pk>/', ManagePostView.as_view(), name='manage_post_url' ),  
]