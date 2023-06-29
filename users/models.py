from django.db import models
# from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, AbstractUser

# Create your models here.
class CustomUserManager(BaseUserManager):
    def create_user(self,email, username, password=None, **extra_fields):
        #The required field customization
        if not email:
            raise ValueError("Email is required")
        
        if not username: 
            raise ValueError("Username is required")
        #ends here.

        email=self.normalize_email(email)

    

        user=self.model(
            email=email,
            username=username,
            **extra_fields
        )

        user.set_password(password)

        user.save()

        return user

    def create_superuser(self,email, username, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_admin", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must set staff to be True")
        
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must set superuser to be True")
        
        if extra_fields.get("is_admin") is not True:
            raise ValueError("Superuser must set is_admin to be True")


        user = self.create_user(email=email, username=username, password=password, **extra_fields)

        user.save()

        return user


class User(AbstractUser):
    GENDER = (
        ('male', 'male'),
        ('female', 'female'),
    )


    email = models.EmailField(unique=True, max_length=80)
    username = models.CharField(max_length=45, unique=True)
    # full_name = models.CharField(max_length=60)
    date_of_birth = models.DateField(null=True)
    profile_picture = models.ImageField(upload_to='profile/', null=True, blank=True, default="")
    phone_number = models.CharField(max_length=20, null=True, blank=True, default="")
    gender = models.CharField(max_length=10, null=True, choices=GENDER)

    

    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)



    object=CustomUserManager

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.username
    
    def get_full_name(self):
        return str(self.first_name + " " + self.last_name)
    
    # def has_perm(self, perm, obj=None):
    #     return True
    
    # def has_module_perms(self, app_label):
    #     return True