from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import StudentInfo, SellerInfo, BuyerInfo
from .serializers import StudentInfoSerializer, BuyerInfoSerializer

# @api_view(['POST'])
# def getStudentInfo(request):
#     if 'stud_registration_no' in request.data and 'stud_password' in request.data:
#         registration_no = request.data['stud_registration_no']
#         password = request.data['stud_password']
        
#         try:
#             student = StudentInfo.objects.get(stud_registration_no=registration_no)
#             if password != student.stud_password:
#                 return Response("Invalid password", status=status.HTTP_403_FORBIDDEN)
#             serializer = StudentInfoSerializer(student)
#             return Response(serializer.data)
#         except StudentInfo.DoesNotExist:
#             return Response("Invalid registration number", status=status.HTTP_403_FORBIDDEN)
#     else:
#         return Response("Registration number and password are required", status=status.HTTP_400_BAD_REQUEST)



# @api_view(['POST','GET'])
# def getStudentInfo(request):
#     if 'stud_registration_no' in request.data and 'stud_password' in request.data:
#         registration_no = request.data['stud_registration_no']
#         password = request.data['stud_password']
        
#         try:
#             student = StudentInfo.objects.get(stud_registration_no=registration_no)
#             if password != student.stud_password:
#                 return Response({"error": "Invalid password"}, status=status.HTTP_403_FORBIDDEN)
#             serializer = StudentInfoSerializer(student)
#             return Response(serializer.data)
#         except StudentInfo.DoesNotExist:
#             return Response({"error": "Invalid registration number"}, status=status.HTTP_403_FORBIDDEN)
#     else:
#         return Response({"error": "Registration number and password are required"}, status=status.HTTP_400_BAD_REQUEST)
    


# @api_view(['GET'])
# def getStudentInfo(request):
#     registration_no = request.param['stud_registration_no']
#     student = StudentInfo.objects.get(stud_registration_no=registration_no)
#     serializer = StudentInfoSerializer(student)
#     return Response(serializer.data)  


@api_view(['POST', 'GET'])
def getStudentInfo(request):
    if request.method == 'POST':
        if 'stud_registration_no' in request.data and 'stud_password' in request.data:
            registration_no = request.data['stud_registration_no']
            password = request.data['stud_password']
            
            try:
                student = StudentInfo.objects.get(stud_registration_no=registration_no)
                if password != student.stud_password:
                    return Response({"error": "Invalid password"}, status=status.HTTP_403_FORBIDDEN)
                serializer = StudentInfoSerializer(student)
                return Response(serializer.data)
            except StudentInfo.DoesNotExist:
                return Response({"error": "Invalid registration number"}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response({"error": "Registration number and password are required"}, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        if 'stud_registration_no' in request.query_params:
            registration_no = request.query_params['stud_registration_no']
            try:
                student = StudentInfo.objects.get(stud_registration_no=registration_no)
                serializer = StudentInfoSerializer(student)
                return Response(serializer.data)
            except StudentInfo.DoesNotExist:
                return Response({"Invalid registration number"}, status=status.HTTP_404_NOT_FOUND)
        elif 'stud_outlook_mail' in request.query_params:
            outlook_id = request.query_params['stud_outlook_mail']
            try:
                student = StudentInfo.objects.get(stud_outlook_mail=outlook_id)
                serializer = StudentInfoSerializer(student)
                return Response(serializer.data)
            except StudentInfo.DoesNotExist:
                return Response({"Invalid Outlook ID"}, status=status.HTTP_404_NOT_FOUND)

        elif 'stud_phone_no' in request.query_params:
            phone_number = request.query_params['stud_phone_no']
            try:
                student = StudentInfo.objects.get(stud_phone_no=phone_number)
                serializer = StudentInfoSerializer(student)
                return Response(serializer.data)
            except StudentInfo.DoesNotExist:
                return Response({"Invalid Phone no"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"Missing information"}, status=status.HTTP_400_BAD_REQUEST)
 

@api_view(['POST'])
def setStudentInfo(request):
    serializer = StudentInfoSerializer(data=request.data)
    if serializer.is_valid():
        st_reg_no = serializer.validated_data.get('stud_registration_no')
        st_pwd = serializer.validated_data.get('stud_password')
        st_cnf_pwd = serializer.validated_data.get('stud_confirm_password')
        try:
            student = StudentInfo.objects.get(stud_registration_no=st_reg_no)
            return Response("Student with ID already registered, Sign In", status=status.HTTP_401_UNAUTHORIZED)
        except StudentInfo.DoesNotExist:
            if st_cnf_pwd != st_pwd:
                return Response("Password and confirm password not same", status=status.HTTP_401_UNAUTHORIZED)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def create_buyer_info(request):
    if request.method == 'POST':
        buyer_address = request.data.get('buyer_address')
        buyer_registration_no = request.data.get('buyer_registration_no')

        # Manually increment buyer ID
        latest_buyer_id = BuyerInfo.objects.latest('buyer_id').buyer_id
        new_buyer_id = latest_buyer_id + 1 if latest_buyer_id else 1

        buyer_info = BuyerInfo.objects.create(
            buyer_id=new_buyer_id,
            buyer_registration_no=buyer_registration_no,
            buyer_address=buyer_address
        )

        return Response({'message': 'Buyer information created successfully.'}, status=status.HTTP_201_CREATED)
    else:
        return Response({'error': 'Invalid request method.'}, status=status.HTTP_400_BAD_REQUEST)

    



# @api_view(['POST'])
# def getStudentInfo(request):
#     if 'stud_registration_no' in request.data and 'stud_password' in request.data:
#         registration_no = request.data['stud_registration_no']
#         password = request.data['stud_password']
        
#         try:
#             student = StudentInfo.objects.get(stud_registration_no=registration_no, stud_password=password)
#             serializer = StudentInfoSerializer(student)
#             data = serializer.data

#             # Convert data to XML
#             root = ET.Element("student")
#             for field, value in data.items():
#                 field_element = ET.SubElement(root, field)
#                 field_element.text = str(value)
            
#             xml_data = ET.tostring(root, encoding="utf-8")
#             return HttpResponse(xml_data, content_type="application/xml")
#         except StudentInfo.DoesNotExist:
#             return HttpResponse("Invalid credentials", status=status.HTTP_404_NOT_FOUND, content_type="application/xml")
#     else:
#         return HttpResponse("Registration number and password are required", status=status.HTTP_400_BAD_REQUEST, content_type="application/xml")

# @api_view(['POST'])
# def setStudentInfo(request):
#     serializer = StudentInfoSerializer(data=request.data)
#     if serializer.is_valid():
#         st_reg_no = serializer.validated_data.get('stud_registration_no')
#         st_pwd = serializer.validated_data.get('stud_password')
#         st_cnf_pwd = serializer.validated_data.get('stud_confirm_password')
#         try:
#             student = StudentInfo.objects.get(stud_registration_no=st_reg_no)
#             return HttpResponse("Student with ID already registered, Sign In", status=status.HTTP_401_UNAUTHORIZED, content_type="application/xml")
#         except StudentInfo.DoesNotExist:
#             if st_cnf_pwd != st_pwd:
#                 return HttpResponse("Password and confirm password not same", status=status.HTTP_401_UNAUTHORIZED, content_type="application/xml")
#             serializer.save()

#             # Return the newly created student information as XML
#             data = serializer.data
#             root = ET.Element("student")
#             for field, value in data.items():
#                 field_element = ET.SubElement(root, field)
#                 field_element.text = str(value)
            
#             xml_data = ET.tostring(root, encoding="utf-8")
#             return HttpResponse(xml_data, status=status.HTTP_201_CREATED, content_type="application/xml")
#     else:
#         return HttpResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST, content_type="application/xml")