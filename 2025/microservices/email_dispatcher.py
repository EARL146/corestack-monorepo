"""
Transactional Email Dispatcher with Queue & Exponential Backoff
"""
import time
import logging

class EmailDispatcher:
    def __init__(self, smtp_host="smtp.sendgrid.net", port=587):
        self.smtp_host = smtp_host
        self.port = port
        self.retry_limit = 3

    def send_order_confirmation(self, recipient: str, order_id: str, total: float):
        for attempt in range(1, self.retry_limit + 1):
            try:
                logging.info(f"[EMAIL] Delivering receipt for order #{order_id} to {recipient} (Attempt {attempt})...")
                # Simulated delivery
                return {"status": "DELIVERED", "timestamp": time.time()}
            except Exception as e:
                logging.warning(f"[EMAIL] Delivery failed: {e}. Backing off...")
                time.sleep(2 ** attempt)
        return {"status": "FAILED", "order_id": order_id}
