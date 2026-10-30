import 'package:flutter/material.dart';
import 'order_controller.dart';
import 'theme_config.dart';

void main() {
  runApp(const BurgerBitesApp());
}

class BurgerBitesApp extends StatelessWidget {
  const BurgerBitesApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Burger Bites POS & Mobile',
      debugShowCheckedModeBanner: false,
      theme: BurgerBitesTheme.darkTheme,
      home: const MainOrderScreen(),
    );
  }
}

class MainOrderScreen extends StatefulWidget {
  const MainOrderScreen({super.key});

  @override
  State<MainOrderScreen> createState() => _MainOrderScreenState();
}

class _MainOrderScreenState extends State<MainOrderScreen> {
  final OrderController _controller = OrderController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Burger Bites 2026'),
        actions: [
          IconButton(
            icon: const Icon(Icons.shopping_cart),
            onPressed: () {},
          )
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.fastfood, size: 80, color: Colors.amber),
            const SizedBox(height: 16),
            const Text(
              'High Performance Mobile Ordering',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () => _controller.addSampleItem(),
              child: const Text('Add Signature Burger'),
            ),
          ],
        ),
      ),
    );
  }
}
