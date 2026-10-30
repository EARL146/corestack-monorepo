import 'package:flutter/material.dart';
import 'order_controller.dart';

class CheckoutScreen extends StatelessWidget {
  final OrderController controller;

  const CheckoutScreen({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Complete Order')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Order Summary', style: Theme.of(context).textTheme.headlineSmall),
            const Divider(),
            Text('Subtotal: â‚±${controller.subtotal.toStringAsFixed(2)}'),
            Text('Tax (12%): â‚±${controller.tax.toStringAsFixed(2)}'),
            Text('Total: â‚±${controller.grandTotal.toStringAsFixed(2)}',
                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
            const Spacer(),
            SizedBox(
              width: double.infinity,
              height: 50,
              child: ElevatedButton(
                onPressed: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('Order submitted successfully!')),
                  );
                },
                child: const Text('Pay with GCash / Card'),
              ),
            )
          ],
        ),
      ),
    );
  }
}
