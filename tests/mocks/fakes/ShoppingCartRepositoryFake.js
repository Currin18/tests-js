const ShoppingCartRepository = require('../../../src/repository/ShoppingCartRepository');
const ShoppingCart = require('../../../src/model/ShoppingCart');
const Product = require('../../../src/model/Product');

class ShoppingCartRepositoryFake extends ShoppingCartRepository {
  static async getCart() {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addItem(new Product('Item 1', '10€'))
    shoppingCart.addItem(new Product('Item 2', '20€'))
    shoppingCart.addItem(new Product('Item 3', '30€'))
    return shoppingCart;
  }
}

module.exports = ShoppingCartRepositoryFake;