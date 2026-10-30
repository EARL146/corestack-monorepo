import 'package:flutter/foundation.dart';
import 'cart_model.dart';

class OrderController extends ChangeNotifier {
  final List<CartItem> _items = [];

  List<CartItem> get items => List.unmodifiable(_items);

  double get subtotal => _items.fold(0.0, (sum, item) => sum + (item.price * item.quantity));
  double get tax => subtotal * 0.12;
  double get grandTotal => subtotal + tax;

  void addSampleItem() {
    _items.add(
      CartItem(
        id: DateTime.now().millisecondsSinceEpoch.toString(),
        name: 'Classic Double Cheeseburger',
        price: 185.00,
        quantity: 1,
      ),
    );
    notifyListeners();
  }

  void clearCart() {
    _items.clear();
    notifyListeners();
  }
}
