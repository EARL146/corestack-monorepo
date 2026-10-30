import 'package:flutter/material.dart';

class MenuService {
  static Future<List<Map<String, dynamic>>> fetchMenuItems() async {
    await Future.delayed(const Duration(milliseconds: 300));
    return [
      {'id': 'm1', 'name': 'Classic Bacon Deluxe', 'price': 210.0, 'category': 'Burgers'},
      {'id': 'm2', 'name': 'Truffle Mushroom Burger', 'price': 265.0, 'category': 'Burgers'},
      {'id': 'm3', 'name': 'Crispy Cajun Fries', 'price': 95.0, 'category': 'Sides'},
      {'id': 'm4', 'name': 'Salted Caramel Milkshake', 'price': 140.0, 'category': 'Drinks'},
    ];
  }
}
