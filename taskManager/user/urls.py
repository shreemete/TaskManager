from django.urls import path,include

from user.views import UserViewSet,TaskViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'user',UserViewSet)
router.register(r'task',TaskViewSet)
urlpatterns = [
    path('',include(router.urls)),
]
