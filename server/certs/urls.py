from django.urls import path
# from django.conf.urls import url
from . import views

urlpatterns = [
    path('login/', views.login, name="login"),
    path('verify/', views.verify, name="verify"),
    path('verify_certs/<str:msg>', views.verify_certs, name="verify_certs"),
    path('genUID/', views.genUID, name="genUID"),
    path('data_entry/', views.data_entry, name="data_entry"),
    path('test/', views.test, name="test"),
    path('upload/', views.FileUploadViewSet, name="File_Upload"),
    path('getAllCertificates_csv_id/<str:csv_id>',
         views.getAllCerTificateByCsv_id, name="csv"),

]
