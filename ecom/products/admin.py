from django.contrib import admin
from .models import (
    Category, Product, Brand, PackageType,
    Review, CartItem, Order, OrderItem,
    Tracking, Wishlist
)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "created_at")
    search_fields = ("name",)


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ("name", "created_at")
    search_fields = ("name",)


@admin.register(PackageType)
class PackageTypeAdmin(admin.ModelAdmin):
    list_display = ("name", "created_at")
    search_fields = ("name",)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "brand", "price", "availability", "rating")
    list_filter = ("category", "brand", "package_type", "availability")
    search_fields = ("name", "description")
    list_editable = ("price", "availability")
    ordering = ("name",)


admin.site.register(Review)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Tracking)
admin.site.register(Wishlist)
