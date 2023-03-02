from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def home(request):
    #return render(request,'index.html')
    #return JsonResponse("hello", safe=False)
    return Response("hello")
@api_view(['GET'])
def getProducts(request):
    #return render(request,'index.html')
    return Response(products)