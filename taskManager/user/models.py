from django.db import models

# Create your models here.

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=20)

    


class Task(models.Model):
    task_id = models.AutoField(primary_key=True)
    taskName=models.CharField(max_length=100)
    taskDetails=models.TextField()
    user=models.ForeignKey(User,on_delete=models.CASCADE)



