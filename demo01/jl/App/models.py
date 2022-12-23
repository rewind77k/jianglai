from django.db import models


# Create your models here.
class Users(models.Model):
    id = models.AutoField('记录编号', primary_key=True)
    username = models.CharField('用户账号', unique=True, max_length=32)
    password = models.CharField('用户密码', max_length=32)
    name = models.CharField('用户姓名', max_length=20)
    type = models.IntegerField('用户身份')

    # 学生: 1, 竞赛负责老师: 21, 审核负责老师: 22, 辅导员: 3
    class Meta:
        db_table = 'users'


class Student(models.Model):
    st_id = models.AutoField('学生学号', primary_key=True)
    st_class = models.CharField('学生班级', max_length=32)
    st_name = models.CharField('学生姓名', max_length=32)

    class Meta:
        db_table = 'student'


class Teacher(models.Model):
    te_id = models.AutoField('教师工号', primary_key=True)
    te_class = models.IntegerField('教师等级')
    te_name = models.CharField('教师姓名', max_length=32)

    class Meta:
        db_table = 'teacher'


class Cotest_Standard(models.Model):
    co_st_id = models.CharField('综测编号', primary_key=True, max_length=32)
    co_st_name = models.CharField('综测名称', max_length=32)
    co_st_type = models.IntegerField('综测类型')
    co_st_verify = models.BooleanField('审核种类')

    class Meta:
        db_table = 'cotest_standard'


class Supporting_Materials(models.Model):
    su_ma_id = models.AutoField('材料编号', primary_key=True)
    co_st_id = models.CharField('综测编号', max_length=32)
    te_id = models.CharField('教师工号', max_length=32)
    su_ma_index = models.CharField('文件索引', max_length=50)

    class Meta:
        db_table = 'supporting_materials'


class Class3_Grade(models.Model):
    id3 = models.AutoField('记录编号', primary_key=True)
    st_id = models.CharField('学生学号', max_length=32)
    co_st_id = models.CharField('综测编号', max_length=32)
    st_name = models.CharField('学生姓名', max_length=32, default='')
    st_class = models.CharField('学生班级', max_length=32)
    su_picture = models.CharField('图片索引', max_length=50)
    cl3_grade = models.FloatField('三级成绩')
    co_st_verify = models.BooleanField('审核类型')

    class Meta:
        db_table = 'class3_grade'


class Class2_Grade(models.Model):
    id2 = models.AutoField('记录编号', primary_key=True)
    st_id = models.CharField('学生学号', max_length=32)
    co_st_type = models.IntegerField('综测类型')
    st_name = models.CharField('学生姓名', max_length=32)
    st_class = models.CharField('学生班级', max_length=32)
    cl2_grade = models.FloatField('二级成绩')

    class Meta:
        db_table = 'class2_grade'


class Class1_Grade(models.Model):
    id1 = models.AutoField('记录编号', primary_key=True)
    st_id = models.CharField('学生学号', max_length=32)
    st_class = models.CharField('学生班级', max_length=32)
    st_name = models.CharField('学生姓名', max_length=32)
    cl1_grade = models.FloatField('总评成绩')
    cl1_class = models.CharField('奖学金等第', max_length=32)

    class Meta:
        db_table = 'class1_grade'
