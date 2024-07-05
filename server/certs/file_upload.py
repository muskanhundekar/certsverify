from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import uuid
from .serializer import FileSerializer
from .models import Csv_Files, participants
import pandas as pd
import math

@api_view(['POST'])
def FileUploadViewSet(request):
    print(request.FILES)
    file = request.FILES['csv_file']
    data = pd.read_csv(file)
    newUploadedFile = Csv_Files(csv_file=file.name)
    newUploadedFile.save()
    csvFileId = newUploadedFile.id
    for index, row in data.iterrows():
        fname = row['first_name']
        lname = row['last_name']
        email = row['email']
        mobile = row['mobile']
        ename = row['event_name']
        # city = row['city']
        uname = row['university_name']
        edate = row['event_date']
        ctype = row['certificate_type']
        if (type(email) != str and math.isnan(email)):
            email = ""
        UID = ""
        if 'uuid' in data.columns:
            UID = row['uuid']
        else:
            UID = str(uuid.uuid4())
        description = None
        if 'description' in data.columns:
            description = row['description']
        designation = None
        if 'designation' in data.columns:
            designation = row['designation']
        empId = None
        if 'emp_id' in data.columns:
            empId = row['emp_id']

        print (email)
        newParticipents = participants(
            first_name=fname, last_name=lname, email=email, mobile=mobile, event_name=ename, university_name=uname, U_ID=UID, csv_file_id=newUploadedFile, certificate_type=ctype, event_date=edate, description=description, designation=designation, emp_id=empId)
        newParticipents.save()

    return Response({"Success": 200, "id": csvFileId})
