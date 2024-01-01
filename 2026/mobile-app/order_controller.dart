// Flutter/Dart Mobile App Controller (2026)
class OrderController {
    final List<Map<String, dynamic>> _items = [];
    List<Map<String, dynamic>> get items => List.unmodifiable(_items);

    void addItem(String name, double price) {
        _items.add({'name': name, 'price': price, 'date': DateTime.now().toIso8601String()});
    }

    double get total => _items.fold(0.0, (sum, item) => sum + (item['price'] as double));
}
