import React from 'react';

class CartSummary extends React.Component {
  render() {
     return (
      <div className="col-md-4">
        <h3>Shopping Cart</h3>
        <div className="cart">
          <div className="panel panel-default">
            <div className="panel-body">
              
              <div className="cart__total">
                <span>Total:</span>&nbsp;
                <span className="cart__total__amount">
                  {total}</span>&nbsp;
                <span>EUR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummary;
