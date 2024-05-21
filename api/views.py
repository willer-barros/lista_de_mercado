from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ItemSerializer
from .models import Item

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


def home(request):
    return render(request, 'index.html')


