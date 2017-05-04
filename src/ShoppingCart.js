import React from 'react';
import products from './data/products';

import ProductList from './ProductList';
import CartSummary from './CartSummary';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.state = {
      productList: products,
      cartItems: []
    }
  }

  addToCart(id) {
    // console.log(this.state.productList);
    var x = this.state.productList.slice(0);
    var productList= x.map(product => Object.assign({}, product));
    
    var cartItems = this.state.cartItems.slice(0).map(item => Object.assign({}, item));

    var product = productList.find(product => product.id === id);
    product.isAddedToCart = true;

    cartItems.push(product);

    this.setState({
      productList,
      cartItems
    });
  }

 
removeFromCart(id) {
    var productList = this.state.productList.slice(0).map(product => Object.assign({}, product));

    var cartItems = this.state.cartItems.slice(0).map(item => Object.assign({}, item));

    var product = productList.find(product => product.id === id);

    cartItems=cartItems.filter((element) => element.id !== id);

    product.isAddedToCart = false;
    
    this.setState({
      productList,
      cartItems
    });
  } 


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{this.props.headerText}</h1>
          </div>
        </div>
        <ProductList
          productList={this.state.productList}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
        />
        <CartSummary
          cartItems={this.state.cartItems}
        />
      </div>
    );
  }
}

export default ShoppingCart;
