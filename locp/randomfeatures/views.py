from django.shortcuts import render
from .serializers import *
from accounts.serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.

# @api_view(['POST'])
# def post_ct(request):
#     # user_obj = CreditTier.objects.get(user=request.user)
#     data = request.data
#     request.data.update({'user': request.user})
#     if int(request.data['credits']) >= 250:
#         data.update({'tier': 'Gold'})
#     elif int(request.data['credits']) >= 150:
#         data.update({'tier': 'Silver'})
#     elif int(request.data['credits']) >= 75:
#         data.update({'tier': 'Bronze'})

#     serializer = CreditTierSerializer(data = request.data)
#     if not serializer.is_valid():
#         return Response({'status':403,'message': "something went wrong", "data" : serializer.data})
#     serializer.save()
#  = User.credittier_set.create(credits = request.data['credits'])
@api_view(['PATCH'])
def post_ct(request):
    user_obj = CreditTier.objects.get(user=request.user)
    data = request.data
    if int(request.data['day']) >= 10:
        user_obj.tier = "Gold"
    elif int(request.data['day']) >= 7:
        user_obj.tier = "Silver"
    elif int(request.data['day']) >= 4:
        user_obj.tier = "Bronze"

    # serializer = CreditTierSerializer(data = request.data)
    # print(serializer.initial_data)
    # if not serializer.is_valid():
    #     return Response({'status':403,'message': "something went wrong", "data" : serializer.data})
    # serializer.save()
    return Response({'status': "200"})


@api_view(['PATCH'])
def patch_deets(request):
    print(request.user)
    try:
        user = User.objects.get(email=request.user.email)
        print(request.user)
    except User.DoesNotExist:
        return Response({"status":"404"})

    serializer = UserPatchSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response({'status':403,'message': "something went wrong", "data" : serializer.data})


@api_view(['GET'])
def get_all_users(request):
    user_objs = User.objects.all()
    serializer = UserRegisterSerializer(user_objs, many=True)
    return Response({'status':200, 'all users': serializer.data})


@api_view(['GET'])
def get_user(request):
    user_obj = User.objects.get(email=request.user.email)
    serializer = UserRegisterSerializer(user_obj)
    return Response({'status':200, 'user': serializer.data})