from rest_framework import serializers
from .models import BuyerInfo, DeliveryInfo, ItemBeingSold, ItemInfo, PaymentInfo, SellerInfo, StudentInfo

class BuyerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuyerInfo
        fields = "__all__"

class DeliveryInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryInfo
        fields = "__all__"

class ItemBeingSoldSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemBeingSold
        fields = "__all__"

class ItemInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemInfo
        fields = "__all__"

class PaymentInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentInfo
        fields = "__all__"

class SellerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellerInfo
        fields = "__all__"

class StudentInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentInfo
        fields = ['stud_registration_no','stud_name','stud_outlook_mail','stud_password','stud_confirm_password','stud_phone_no']
