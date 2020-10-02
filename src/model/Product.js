class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  applyPromotion(promotion) {
    this.price = promotion;
  }
}

module.exports = Product;