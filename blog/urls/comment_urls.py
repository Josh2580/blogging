from django.urls import path
from blog.views.comment_view import CommentView, CommentManageView

 
urlpatterns = [
    path('', CommentView.as_view(), name='comment_post_url' ),
    path('<str:pk>/', CommentManageView.as_view(), name='comment_manage_post_url'),
]
