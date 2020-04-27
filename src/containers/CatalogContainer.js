import React, { Component } from 'react';
import Product from '../ProfileComponents/Product'

class CatalogContainer extends Component {

  render() {
    return (
      <div className="catalog">
        <h2>GCN Product Catalog</h2>
        <div id="product-catalog">
          {
            this.props.products.map(productObj => <Product key={productObj.id} product={productObj} addProductToOrder={this.props.addProductToOrder}/>)
          }
        </div>
      </div>

    );
  }

}

export default CatalogContainer; 