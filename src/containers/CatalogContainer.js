import React, { Component } from 'react';
import Product from '../ProfileComponents/Product'

class CatalogContainer extends Component {

  render() {
    return (
      <div className="catalog">
<<<<<<< HEAD
        <h2>GCN Product Catalog</h2>
        <div id="product-catalog" className="product-catalog">
          {
            this.props.products.map(productObj => <Product key={productObj.id} product={productObj} addProductToOrder={this.props.addProductToOrder}/>)
          }
=======
        <h1 className="my-4">GCN Product Catalog</h1>
        <div className="container">
            <div id="product-catalog" className="row">
                <div class="card-deck">
                  {
                    this.props.products.map(productObj => <Product key={productObj.id} product={productObj} addProductToOrder={this.props.addProductToOrder}/>)
                  }
                </div>
            </div>
>>>>>>> 50fb7973b31d0664bd3baaeacede48e2342f392e
        </div>
      </div>

    );
  }

}

export default CatalogContainer;
