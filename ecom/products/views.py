from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import Product, CartItem, Wishlist
from .serializers import ProductSerializer, CartItemSerializer, WishlistSerializer


# -------------------------------------------------
# 🛍 PRODUCT VIEWSET (FULL FILTERING + SORTING)
# -------------------------------------------------
class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        qs = Product.objects.all()
        params = self.request.query_params

        # ---------------------------------------
        # 🔍 SEARCH: ?search=apple
        # ---------------------------------------
        search_query = params.get("search")
        if search_query:
            qs = qs.filter(
                Q(name__icontains=search_query) |
                Q(category__name__icontains=search_query)
            )

        # ---------------------------------------
        # 📂 MULTI CATEGORY FILTER:
        # ?category__name=Fruits,Bakery
        # ---------------------------------------
        category_param = params.get("category__name")
        if category_param:
            category_list = category_param.split(",")
            qs = qs.filter(category__name__in=category_list)

        # ---------------------------------------
        # 💰 PRICE FILTER:
        # ?max_price=150
        # ---------------------------------------
        max_price = params.get("max_price")
        if max_price:
            qs = qs.filter(price__lte=max_price)

        # ---------------------------------------
        # ⭐ SORTING
        # ?ordering=price
        # ?ordering=popularity
        # ---------------------------------------
        ordering = params.get("ordering")
        if ordering == "price":
            qs = qs.order_by("price")
        elif ordering == "popularity":
            qs = qs.order_by("-rating")  # change if you use another popularity metric

        return qs


# -------------------------------------------------
# 🛒 CART VIEWSET
# -------------------------------------------------
class CartViewSet(viewsets.ModelViewSet):
    serializer_class = CartItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        product_id = request.data.get("product_id")
        quantity = int(request.data.get("quantity", 1))
        product = get_object_or_404(Product, id=product_id)

        cart_item, created = CartItem.objects.get_or_create(
            user=request.user,
            product=product,
        )

        if not created:
            cart_item.quantity += quantity

        cart_item.save()
        return Response(CartItemSerializer(cart_item).data, status=status.HTTP_201_CREATED)


# -------------------------------------------------
# ❤️ WISHLIST VIEWSET
# -------------------------------------------------
class WishlistViewSet(viewsets.ModelViewSet):
    serializer_class = WishlistSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Wishlist.objects.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        product_id = request.data.get("product_id")
        product = get_object_or_404(Product, id=product_id)

        wishlist_item, created = Wishlist.objects.get_or_create(
            user=request.user,
            product=product,
        )

        if not created:
            wishlist_item.delete()
            return Response({"message": "Removed from wishlist"}, status=status.HTTP_200_OK)

        return Response(WishlistSerializer(wishlist_item).data, status=status.HTTP_201_CREATED)
