// import React from 'react';
// // import PastOrderForm from '../ProfileComponents/PastOrderForm'
// import Order from '../ProfileComponents/Order'

// const PastOrdersContainer = (props) => {
  

//   let arrayOfPastOrders = () => {
  
//    let pastorders = props.orders.forEach(order => order.product_orders.map(po => {console.log(po)}))
//     // <Order key={po.id} po={po}/>))

//     return pastorders
    
    

//   }
  
  

//   return (
//     <div className="custom">
//       <h2>See Past Orders</h2>

//       <div id="ordersDiv">
//         { arrayOfPastOrders() }
//       </div>
    
//     </div>
//   )
// }
// export default PastOrdersContainer;

import React from 'react';

import Order from '../ProfileComponents/Order'

const PastOrdersContainer = (props) => {

  return (
    <div className="custom">
      <h2>See Past Orders</h2>

      <div id="ordersDiv">
        {props.orders.map(order => <Order key={order.id} order={order}/>)}
      </div>
     
    </div>
  )
}
export default PastOrdersContainer;