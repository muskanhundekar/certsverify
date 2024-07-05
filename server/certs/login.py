from django.shortcuts import render
from django.http import HttpResponse, HttpRequest, JsonResponse
from regex import R
from .models import *
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, schema, permission_classes
from django_pandas.io import read_frame
from django.utils import timezone
from django.core import serializers
import requests
import time
import os
from datetime import datetime
import uuid
import json
import shortuuid
import random


@api_view(['POST'])
def login(request):
    username = request.data['username']
    password = request.data['password']
    try:
        data_obj = login_info.objects.get(username=username)
        if data_obj.password == password:
            status = 200
        else:
            status = 400
    except:
        status = 400
    return Response({"status": status})


@api_view(['POST'])
def verify(request):
    print("verify")
    u_id = request.data['u_id']
    try:
        data_obj = participants.objects.get(U_ID=u_id)
        first_name = data_obj.first_name
        last_name = data_obj.last_name
        mobile = data_obj.mobile
        email = data_obj.email
        event_name = data_obj.event_name
        event_date = data_obj.event_date
        description = data_obj.description
        certificate_type = data_obj.certificate_type
        designation = data_obj.designation
        emp_id = data_obj.emp_id
        data = {"username": first_name+" "+last_name, "mobile": mobile, "designation": designation, "emp_id": emp_id,
                'email': email, 'event_date': event_date, 'event_name': event_name, 'certificate_type': certificate_type, "description": description}
        status = 200
    except:
        data = ""
        status = 400
    return Response({"status": status, "data": data})


@api_view(['GET'])
def genUID(request):
    # prefix = request.data['prefix']
    data_obj = participants.objects.all()
    for each in data_obj:
        if (each.U_ID == None or each.U_ID == ""):
            print(each.first_name)
            uid = shortuuid.ShortUUID().random(length=8)
            each.U_ID = "DAPI2022TE-"+str(uid)
            # each.U_ID = prefix+"-"+str(uid)
            each.save()
    return Response({"status": 200})


@api_view(['POST'])
def data_entry(request):
    certificate_type = request.data['certificate_type']
    description = request.data['description']
    fname = request.data['fname']
    lname = request.data['lname']
    city = request.data['city']
    state = request.data['state']
    country = request.data['country']
    address = request.data['address']
    mob = request.data['mob']
    email = request.data['email']
    univ = request.data['univ']
    degree = request.data['degree']
    eventname = request.data['ename']
    eventdate = request.data['edate']
    UID = str(uuid.uuid4())
    # try:
    data_obj = participants(certificate_type=certificate_type, first_name=fname, last_name=lname, city=city, state=state, country=country, address=address, description=description,
                            mobile=mob, email=email, university_name=univ, degree=degree, event_name=eventname, event_date=eventdate, U_ID=UID)
    data_obj.save()
    status = 200
    data = [fname, lname, UID]
    # gen_UID()
    # except:
    #     status = 400
    return Response({"status": status, "data": data})


def gen_UID():
    data_obj = participants.objects.all()
    for each in data_obj:
        if (each.U_ID == None or each.U_ID == ""):
            print(each.first_name)
            id = each.id
            each.U_ID = "DPI2022TE"+str(id)
            each.save()


@api_view(['POST'])
def verify_certs(request, msg):
    # print(msg)
    u_id = msg
    try:
        data_obj = participants.objects.get(U_ID=u_id)
        first_name = data_obj.first_name
        last_name = data_obj.last_name
        mobile = data_obj.mobile
        email = data_obj.email
        data = {"username": first_name+" "+last_name,
                "mobile": mobile, 'email': email}
        status = 200
    except:
        data = ""
        status = 400
    return Response({"status": status, "data": data})
    # return render(request, {'msg' : msg})


@api_view(['GET'])
def getAllCerTificateByCsv_id(request,  *args, **kwargs):
    id = kwargs.get('csv_id')
    # print(requests)
    csv = Csv_Files.objects.filter(id=id).first()
    all_participents = participants.objects.filter(
        csv_file_id=csv).only('first_name', 'last_name', 'email', 'U_ID')
    qs_json = serializers.serialize('json', all_participents)
    qs_json = json.loads(qs_json)
    return Response({"status": 200, "data": qs_json})


def test(request, format=None):
    return Response({"status": 200})
