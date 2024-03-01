from  rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.parsers import XMLParser
from django.http import HttpResponse
import xml.etree.ElementTree as ET
from .models import StudentInfo, SellerInfo
from . serializers import StudentInfoSerializer

@api_view(['POST'])
def getStudentInfo(request):
    if 'stud_registration_no' in request.data and 'stud_password' in request.data:
        registration_no = request.data['stud_registration_no']
        password = request.data['stud_password']
        
        try:
            student = StudentInfo.objects.get(stud_registration_no=registration_no, stud_password=password)
            serializer = StudentInfoSerializer(student)
            data = serializer.data

            # Convert data to XML
            root = ET.Element("student")
            for field, value in data.items():
                field_element = ET.SubElement(root, field)
                field_element.text = str(value)
            
            xml_data = ET.tostring(root, encoding="utf-8")
            return HttpResponse(xml_data, content_type="application/xml")
        except StudentInfo.DoesNotExist:
            return HttpResponse("Invalid credentials", status=status.HTTP_404_NOT_FOUND, content_type="application/xml")
    else:
        return HttpResponse("Registration number and password are required", status=status.HTTP_400_BAD_REQUEST, content_type="application/xml")

@api_view(['POST'])
def setStudentInfo(request):
    serializer = StudentInfoSerializer(data=request.data)
    if serializer.is_valid():
        st_reg_no = serializer.validated_data.get('stud_registration_no')
        st_pwd = serializer.validated_data.get('stud_password')
        st_cnf_pwd = serializer.validated_data.get('stud_confirm_password')
        try:
            student = StudentInfo.objects.get(stud_registration_no=st_reg_no)
            return HttpResponse("Student with ID already registered, Sign In", status=status.HTTP_401_UNAUTHORIZED, content_type="application/xml")
        except StudentInfo.DoesNotExist:
            if st_cnf_pwd != st_pwd:
                return HttpResponse("Password and confirm password not same", status=status.HTTP_401_UNAUTHORIZED, content_type="application/xml")
            serializer.save()

            # Return the newly created student information as XML
            data = serializer.data
            root = ET.Element("student")
            for field, value in data.items():
                field_element = ET.SubElement(root, field)
                field_element.text = str(value)
            
            xml_data = ET.tostring(root, encoding="utf-8")
            return HttpResponse(xml_data, status=status.HTTP_201_CREATED, content_type="application/xml")
    else:
        return HttpResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST, content_type="application/xml")


#THIS IS THE ORIGINAL CODE BEFORE XML CONVERSION

# from  rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework import status
# from .models import StudentInfo, SellerInfo
# from . serializers import StudentInfoSerializer

# @api_view(['POST'])
# def getStudentInfo(request):
#     if 'stud_registration_no' in request.data and 'stud_password' in request.data:
#         registration_no = request.data['stud_registration_no']
#         password = request.data['stud_password']
        
#         try:
#             student = StudentInfo.objects.get(stud_registration_no=registration_no, stud_password=password)
#             serializer = StudentInfoSerializer(student)
#             return Response(serializer.data)
#         except StudentInfo.DoesNotExist:
#             return Response("Invalid credentials", status=status.HTTP_404_NOT_FOUND)
#     else:
#         return Response("Registration number and password are required", status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# def setStudentInfo(request):
#     serializer = StudentInfoSerializer(data=request.data)
#     if serializer.is_valid():
#         st_reg_no = serializer.validated_data.get('stud_registration_no')
#         st_pwd = serializer.validated_data.get('stud_password')
#         st_cnf_pwd = serializer.validated_data.get('stud_confirm_password')
#         try:
#             student = StudentInfo.objects.get(stud_registration_no=st_reg_no)
#             return Response("Student with ID already registered, Sign In", status=status.HTTP_401_UNAUTHORIZED)
#         except StudentInfo.DoesNotExist:
#             if st_cnf_pwd != st_pwd:
#                 return Response("Password and confirm password not same", status=status.HTTP_401_UNAUTHORIZED)
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#     else:
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)