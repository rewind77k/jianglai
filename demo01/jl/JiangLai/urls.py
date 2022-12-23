"""
程序名：后台接口url配置
功能：后台接口url配置
"""
from django.contrib import admin
from django.urls import path
from App import views
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    # 系统界面
    path('login/', views.login),
    # 调试界面
    path('initialize/', views.initialize),
    path('info/add/', views.info_add),
    path('info/delete/', views.info_delete),
    path('info/list/', views.info_list),

    # 辅导员界面
    path('counselor/upload/', views.upload_3),
    path('counselor/verify/', views.counselor_verify),
    path('grade/calculate/', views.grade_calculate),
    path('counselor/lookover/', views.counselor_lookover),

    # 学生界面
    path('student/upload/', views.upload_1),
    # path('student/info/', views.student_info),
    # 老师界面
    path('teacher/upload/', views.upload_21),
    path('auditor/verify/', views.counselor_verify),
]
urlpatterns += static('/exc/', document_root=settings.EXC_ROOT)
urlpatterns += static('/img/', document_root=settings.IMG_ROOT)