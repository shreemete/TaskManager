from rest_framework import serializers
from user.models import User,Task

class UserSerializer(serializers.HyperlinkedModelSerializer):
    user_id=serializers.ReadOnlyField()
    # tasks = serializers.StringRelatedField(many=True)
    

    class Meta:
        model=User
        fields="__all__"

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    task_id=serializers.ReadOnlyField()
    # trac = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    tasks = UserSerializer(read_only=True)
    class Meta:
        model=Task
        fields="__all__"