import React, { Component } from 'react';
import Product from '../ProfileComponents/Product'

class CatalogContainer extends Component {

  render() {
    // console.log(this.props)
    return (
      <div className="catalog">
        <h1 className="my-4">GCN Catalog</h1>
        <div className="container">
            <div id="product-catalog" className="row">
                <div className="card-deck">
                  {
                    this.props.products.map(productObj => <Product key={productObj.id} product={productObj} addProductToOrder={this.props.addProductToOrder}/>)
                  }
                </div>
            </div>
        </div>
      </div>

    );
  }

}

export default CatalogContainer;
