"""
Notification Dispatch Microservice - 2025
Author: Early Pajo (EARL146)
"""
import json
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("NotificationDispatcher")

class NotificationService:
    def __init__(self):
        self.queue = []

    def dispatch_sms(self, phone_number: str, message: str) -> bool:
        logger.info(f"[SMS] Dispatched to {phone_number}: {message}")
        return True

    def dispatch_push(self, device_token: str, payload: dict) -> bool:
        logger.info(f"[PUSH] Sent to token {device_token[:8]}... with payload: {json.dumps(payload)}")
        return True

if __name__ == "__main__":
    notifier = NotificationService()
    notifier.dispatch_sms("+639170001122", "Your authentication code is 491028.")
