from django.core.mail import EmailMessage

class Util:
	@staticmethod
	def send_email(data):
		email = EmailMessage(subject = data['subject'], body = data['email_body'], to = [data['to']])
		email.send() 

def send_event_mail(data, user):
	name = data['name']
	ngo = data['ngo']
	date = data['date']
	time = data['time']
	address = data['address']
	mode = data['mode']

	entry = {'email_body': f'This is your registration confirmation for the event {name} by {ngo.name} on {date}, {time} at {address}. We are heartily expecting your {mode} presence.', 'subject':f'{name}', 'to' : f'{user.email}' } 

	Util.send_email(entry)