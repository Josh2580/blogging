from django.urls import path
from blog.views.category_view import CategoryView, ManageCategoryView


urlpatterns = [

    path('', CategoryView.as_view(), name='category_url' ),
    path('<str:pk>/', ManageCategoryView.as_view(), name='manage_category_url' ),

]
 