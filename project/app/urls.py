from django.urls import path
from app import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/product/', views.getProduct, name='product_list'),
    path('api/products/<str:pk>', views.getProducts, name='product_details'),
]
