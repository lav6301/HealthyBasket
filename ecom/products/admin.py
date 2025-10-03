from django.contrib import admin
from .models import Category, Product, Review, CartItem, Order, OrderItem, Tracking

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Tracking)
