from django.db import models

import uuid

from account.models import CustomUser


class Notification(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)

    notification_title = models.CharField(max_length=255, null=True, blank=True)

    notification_message = models.CharField(max_length=255, null=True)

    is_seen = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
