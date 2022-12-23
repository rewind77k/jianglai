from django.contrib import admin
# Register your models here.
from App.models import *

admin.site.register(Users)
admin.site.register(Class1_Grade)
admin.site.register(Class2_Grade)
admin.site.register(Class3_Grade)
admin.site.register(Cotest_Standard)
admin.site.register(Student)
admin.site.register(Supporting_Materials)
admin.site.register(Teacher)