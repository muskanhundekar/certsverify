from pyexpat import model
from statistics import mode
from time import time
from django.db import models
from datetime import datetime
import uuid
# from model_utils import Choicesf


# Create your models here.


class login_info(models.Model):
    username = models.CharField(max_length=100, default="")
    password = models.CharField(max_length=100, default="")


class Csv_Files(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # csv_file = models.FileField(upload_to="csv/")
    csv_file = models.CharField(max_length=300, blank=True, null=True)

    def __str__(self) -> str:
        return self.csv_file


class participants(models.Model):
    certificate_type = models.CharField(max_length=300, blank=True, null=True)
    description = models.CharField(max_length=300, blank=True, null=True)
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100,  blank=True, null=True)
    state = models.CharField(max_length=100,  blank=True, null=True)
    country = models.CharField(max_length=100,  blank=True, null=True)
    address = models.CharField(max_length=100,  blank=True, null=True)
    mobile = models.CharField(max_length=100,  blank=True, null=True)
    email = models.CharField(max_length=100,  blank=True, null=True)
    university_name = models.CharField(max_length=100,  blank=True, null=True)
    degree = models.CharField(max_length=100,  blank=True, null=True)
    event_name = models.CharField(max_length=100,  blank=True, null=True)
    event_date = models.CharField(max_length=100,  blank=True, null=True)
    designation = models.CharField(max_length=100,  blank=True, null=True)
    emp_id = models.CharField(max_length=10,  blank=True, null=True)
    issue_date = models.CharField(max_length=100,  blank=True, null=True)
    U_ID = models.CharField(max_length=100,  blank=True, null=True)
    csv_file_id = models.ForeignKey(
        Csv_Files, null=True, on_delete=models.SET_NULL, default=None)

    class Meta:
        verbose_name_plural = "Attendees"


def image_tag(self):
    from django.utils.html import escape
    return u"{% load static %}<img src={% static 'logo.png' %} />"


image_tag.short_description = 'Image'
image_tag.allow_tags = True
