from .models import EmailMember
from rest_framework import serializers

class EmailMemberSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField(required = True, allow_blank = False, max_length = 100)
    email = serializers.CharField(required = True, allow_blank = False, max_length = 200)
    subscribed = serializers.BooleanField(default=True)

    def create(self, validated_data):
        """
        Subscribe for email newsletter
        """
        return EmailMember.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        """
        Update the detail of the subscription
        """
        instance.name = validated_data.get('name', instance.name)
        instance.email = validated_data.get('email', instance.email)
        instance.subscribed = validated_data.get('subscribed', instance.subscribed)
        instance.save()
        return instance


