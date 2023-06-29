from rest_framework.pagination import PageNumberPagination

class BlogPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'pages'
    max_page_size = 5


class CommentPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'pages'
    max_page_size = 6