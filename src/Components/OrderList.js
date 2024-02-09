
import React from 'react';

const OrderList = (props) => {
 
    return(
        <li>
            {props.dishDetails.orderId}    {props.dishDetails.dishName}  {props.dishDetails.dishPrice}   {props.dishDetails.tableNo}  <button type='button'> Delete</button>
        </li>
    )
}

export default OrderList;