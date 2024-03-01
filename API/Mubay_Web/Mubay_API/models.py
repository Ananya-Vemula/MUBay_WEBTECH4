# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class BuyerInfo(models.Model):
    buyer_id = models.AutoField(primary_key=True)
    buyer_registration_no = models.OneToOneField('StudentInfo', models.DO_NOTHING, db_column='buyer_registration_no')
    buyer_address = models.CharField(max_length=120)

    class Meta:
        managed = False
        db_table = 'buyer_info'


class DeliveryInfo(models.Model):
    delivered_status = models.CharField(max_length=1)
    delivered_at = models.DateTimeField(blank=True, null=True)
    payment = models.ForeignKey('PaymentInfo', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'delivery_info'


class ItemBeingSold(models.Model):
    trans_id = models.IntegerField(primary_key=True)
    seller_id = models.IntegerField()
    item = models.ForeignKey('ItemInfo', models.DO_NOTHING, db_column='Item_ID')  # Field name made lowercase.
    selling_item_cost = models.IntegerField(blank=True, null=True)
    no_items_sold = models.IntegerField()
    uploaded_date = models.DateTimeField()
    updated_date = models.DateTimeField()
    sold_date = models.DateTimeField()
    buyer = models.OneToOneField(BuyerInfo, models.DO_NOTHING)
    item_status = models.CharField(max_length=1)
    item_img_uploaded = models.CharField(max_length=1)
    item_link_uploaded = models.CharField(max_length=1)
    item_link = models.CharField(unique=True, max_length=150, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'item_being_sold'


class ItemInfo(models.Model):
    item_id = models.AutoField(db_column='Item_id', primary_key=True)  # Field name made lowercase.
    seller = models.ForeignKey('SellerInfo', models.DO_NOTHING)
    item_name = models.CharField(db_column='Item_name', max_length=45)  # Field name made lowercase.
    item_condition = models.CharField(db_column='Item_condition', max_length=45)  # Field name made lowercase.
    itme_description = models.CharField(db_column='Itme_description', max_length=200)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'item_info'


class PaymentInfo(models.Model):
    payment_id = models.IntegerField(primary_key=True)
    buyer_id = models.IntegerField(unique=True)
    seller_id = models.IntegerField(unique=True)
    item = models.OneToOneField(ItemBeingSold, models.DO_NOTHING)
    buyer_payment_method = models.CharField(max_length=45)
    buyer_uip_id = models.CharField(db_column='buyer_UIP_ID', max_length=45, blank=True, null=True)  # Field name made lowercase.
    bought_on = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'payment_info'


class SellerInfo(models.Model):
    seller_id = models.IntegerField(primary_key=True)
    stud_registration_no = models.ForeignKey('StudentInfo', models.DO_NOTHING, db_column='stud_registration_no')
    seller_address = models.CharField(max_length=120)
    seller_sold_items = models.IntegerField()
    seller_rating = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'seller_info'


class StudentInfo(models.Model):
    stud_registration_no = models.IntegerField(primary_key=True)
    stud_name = models.CharField(unique=True, max_length=60)
    stud_outlook_mail = models.CharField(unique=True, max_length=100)
    stud_password = models.CharField(unique=True, max_length=12)
    stud_confirm_password = models.CharField(max_length=45)
    stud_created_at = models.DateTimeField(auto_now_add = True)
    stud_updated_at = models.DateTimeField(auto_now_add = True)
    stud_phone_no = models.IntegerField(unique=True)

    class Meta:
        managed = False
        db_table = 'student_info'
