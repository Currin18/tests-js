const db = require('../../res/ShoppingCart.json');
const ShoppingCart = require('../model/ShoppingCart');
const Product = require('../model/Product');

class ShoppingCartRepository {
  static async getCart() {
    const shoppingCart = new ShoppingCart();

    db.items.forEach(it => {
      shoppingCart.addItem(new Product(it.name, it.price));
    });

    return shoppingCart;
  }
};

module.exports = ShoppingCartRepository;