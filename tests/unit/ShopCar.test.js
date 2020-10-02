const { assert } = require('chai');
const sinon = require('sinon');
const ShoppingCart = require('../../src/model/ShoppingCart');
const ProductDummy = require('../mocks/dummies/ProductDummy');
const ShoppingCartRepository = require('../../src/repository/ShoppingCartRepository');
const ShoppingCartRepositoryFake = require('../mocks/fakes/ShoppingCartRepositoryFake');

describe('shoppingCart', () => {
  describe('Dummy', () => {
    const shoppingCart = new ShoppingCart();

    beforeEach(() => {
      shoppingCart.clearItems();
      shoppingCart.addItem(ProductDummy);
      shoppingCart.addItem(ProductDummy);
    });

    it('numOfItems', () => {
      assert.equal(shoppingCart.numOfItems(), 2, 'number of items is not equal 2');
    });

    it('numOfItems + 1', () => {
      shoppingCart.addItem(ProductDummy);
      assert.equal(shoppingCart.numOfItems(), 3, 'number of items is not equal 3');
    });

    it('numOfItems - 1', () => {
      shoppingCart.removeLastItem();
      assert.equal(shoppingCart.numOfItems(), 1, 'number of items is not equal 1');
    });
  });

  describe('Fake', async () => {
    let shoppingCart = new ShoppingCart();
    // const repository = ShoppingCartRepository;
    const repository = ShoppingCartRepositoryFake;

    beforeEach(async () => {
      shoppingCart = await repository.getCart();
    });

    it('numOfItems', () => {
      // console.log(shoppingCart.items);
      assert.ok(shoppingCart.numOfItems() > 0, 'number of items is <=0');
    });
  });

  describe('Stub', () => {
    let shoppingCart = new ShoppingCart();
    const repository = ShoppingCartRepository;

    beforeEach(async () => {
      shoppingCart = await repository.getCart();
    });

    it('processCart', () => {
      // console.log(shoppingCart)
      sinon
        .stub(shoppingCart, 'sendMail')
        .withArgs()
        .callsFake(() => {/*console.log('mail sent')*/});

      assert.ok(shoppingCart.processCart(), 'Cart not proccess');
    })
  });

  describe('Spy', () => {
    let shoppingCart = new ShoppingCart();
    const repository = ShoppingCartRepository;

    beforeEach(async () => {
      shoppingCart = await repository.getCart();
    });

    it('processCart', () => {

      sinon.spy(shoppingCart);

      assert.notOk(shoppingCart.sendMail.calledOnce, 'sendMail is not called');

      shoppingCart.processCart();

      assert.isEmpty(shoppingCart.items, 'Cart not empty');
      assert.ok(shoppingCart.sendMail.calledOnce, 'sendMail is not called');
    });
  });

  describe('Mock', () => {
    const shoppingCart = new ShoppingCart();
    const product = ProductDummy;
    const mock = sinon.mock(product).expects('applyPromotion').once();

    beforeEach(async () => {
      shoppingCart.clearItems()
      shoppingCart.addItem(product);
    });

    it('applyPromotion', () => {
      shoppingCart.applyPromotion('5€');

      mock.verify()
    });
  });
});