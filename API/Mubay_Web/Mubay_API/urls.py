from django.urls import path
from . import views


# urlpatterns = [
#     # Endpoint to retrieve student information in XML format
#     path('getstudentinfo.xml', views.get_student_info_xml, name='get_student_info_xml'),

#     # Endpoint to set student information (no change needed)
#     path('setstudentinfo', views.setStudentInfo, name='setstudentinfo')
# ]

#CODE BEFORE XML
urlpatterns = [
    path('getstudentinfo', views.getStudentInfo, name='getstudentinfo'),
    path('setstudentinfo', views.setStudentInfo, name='setstudentinfo')
]