from django.contrib import admin
from .models import *
import django.contrib.auth.admin
import django.contrib.auth.models
from django.contrib import auth

from django.utils.html import format_html
from django.conf import settings
from django.conf.urls.static import static

# @admin.register(Model) 
# class Model1Admin(admin.ModelAdmin):

#     def image_tag(self, obj):
#         return format_html('<img src={% static "logo.png" %} />')

#     image_tag.short_description = 'Image'

#     list_display = ['image_tag',]

# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# fields = ( 'image_tag', )
# readonly_fields = ('image_tag',)

# img = "{% load static %}<img src={% static 'logo.png' %} />"

admin.site.site_header = 'ThirdEye Certificate Management System'
admin.site.site_title  =  "ThirdEye Certificate Management System"
admin.site.index_title  =  "ThirdEye Certificate Management System"

class part_display(admin.ModelAdmin):
    list_display= ('first_name','last_name','city','state','country','address','mobile','email','university_name','degree','event_name','U_ID')

admin.site.register(participants, part_display)

admin.site.unregister(auth.models.User)
admin.site.unregister(auth.models.Group)