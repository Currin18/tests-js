class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeLastItem() {
    this.items.pop();
  }

  clearItems() {
    this.items = [];
  }
  
  numOfItems() {
    return this.items.length;
  }

  processCart() {
    this.sendMail();
    this.items = [];
    return true;
  }

  sendMail() {
    // Mail sent
  }

  applyPromotion(promotion) {
    this.items.forEach(it => { it.applyPromotion(promotion) });
  }
}

module.exports = ShoppingCart;