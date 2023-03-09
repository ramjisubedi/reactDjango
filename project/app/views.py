from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
#from .products import products
from .models import Product
from .serializer import ProductSerializer

# Create your views here.
#@api_view(['GET'])
def home(request):
    #return render(request,'index.html')
    return JsonResponse("hello", safe=False)
    #return Response("hello")
@api_view(['GET'])
def getProduct(request):
    #return render(request,'index.html')
    products = Product.objects.all()
    serializer = ProductSerializer(products,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProducts(request,pk):
    # product = None
    # for i in products:
    #     if i['_id']==pk:
    #         product = i
    #         break
    # return Response(product)
    products = Product.objects.get(_id=pk)
    serializer = ProductSerializer(products,many=False)
    return Response(serializer.data)