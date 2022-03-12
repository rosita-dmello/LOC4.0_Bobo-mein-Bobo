from rest_framework.generics import GenericAPIView
from rest_framework.authtoken.models import Token
from .serializers import *
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util
from django.contrib.auth import authenticate,login

from rest_framework.response import Response
from rest_framework import status,permissions

from .models import User
import random

# Create your views here.
class UserRegisterAPI(GenericAPIView):
	permission_classes = [permissions.AllowAny]
	serializer_class = UserRegisterSerializer
	
	def post(self,request,*args,**kwargs):
		data = request.data
		otp = random.randint(100000, 999999)
		data = data.copy()
		data.update({'otp':otp})
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception = True)
		user = serializer.save()
		token = Token.objects.create(user=user)
		# current_site = get_current_site(request).domain
		# relative_link = reverse('email-verify')
		# link = 'http://'+current_site+relative_link+'?token='+ token.key
		# data = {'email_body': f'Use this link to get verified: {link}.', 'subject':'Email Verification', 'to' : user.email}
		data = {'email_body': f'Use this OTP to get verified: {otp}.', 'subject':'Email Verification', 'to' : user.email}
		Util.send_email(data)
		return Response(token.key,status=status.HTTP_201_CREATED)


class LoginAPI(GenericAPIView):
	permission_classes = [permissions.AllowAny]
	serializer_class = LoginSerializer
	
	def post(self,request,*args,**kwargs ):
		email = request.data.get('email',None)
		password = request.data.get('password',None)
		user = authenticate(email = email, password = password)
		if user :
			login(request,user)
			serializer = self.serializer_class(user)
			token = Token.objects.get(user=user)
			return Response(token.key,status = status.HTTP_200_OK)

		return Response('Invalid Credentials',status = status.HTTP_404_NOT_FOUND)


# class EmailVerify(GenericAPIView):
# 	permission_classes = [permissions.AllowAny]
# 	serializer_class = EmailVerifySerializer
# 	def post(self,request):
# 		#token = request.GET.get('token')
# 		otp = request.data.get('otp',None)
# 		token = request.data.get('token',None)
# 		user = User.objects.get(auth_token = token)
# 		serializer = self.serializer_class(data=otp)
# 		# user = User.objects.filter(otp = otp).first()
# 		if user.otp==otp:
# 			if not user.is_active:
# 				user.is_active = True
# 				user.save()
# 			return Response({'message' : 'Account Verified'}, status=status.HTTP_200_OK)

# 		return Response('OTP invalid',status = status.HTTP_404_NOT_FOUND)