import React, { useState } from "react";
import Card from './UI/Card';
import './OrderForm.css';

const OrderForm = (props) => {
  const [orderId, setOrderId] = useState("");
  const [dishName, setDishName] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [tableNo, setTableNo] = useState("Table 1");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const dishDetails = {
      orderId: orderId,
      dishName: dishName,
      dishPrice: dishPrice,
      tableNo: tableNo,
    };
    props.orderDetails(dishDetails);
    setOrderId("");
    setDishName("");
    setDishPrice("");
    setTableNo("Table 1");
  };

  const orderIdHandler = (event) => {
    setOrderId(event.target.value);
  };
  const dishNameHandler = (event) => {
    setDishName(event.target.value);
  };

  const dishPriceHandler = (event) => {
    setDishPrice(event.target.value);
  };

  const tableNoHandler = (event) => {
    setTableNo(event.target.value);
    console.log(event.target.value);
  };

  return (
    <React.Fragment>
      <Card className="form-body">
        <form onSubmit={onSubmitHandler}>
          <div className="dish-labels">
            <label htmlFor="orderId" id='orderIdLabel'>Unique Order ID</label>
            <label  htmlFor="dish" id='dishLabel'>Dish Name</label>
            <label  htmlFor="dishPrice" id='dishPriceLabel'>Dish Price</label>
          </div>
          <div className="input-field1">
            <input
              type="number"
              id="orderId"
              value={orderId}
              onChange={orderIdHandler}
            ></input>
            <input
              type="text"
              id="dish"
              value={dishName}
              onChange={dishNameHandler}
            ></input>
            <input
              type="number"
              id="dishPrice"
              value={dishPrice}
              onChange={dishPriceHandler}
            ></input>
          </div>

          <div className="table-label">
            <label  htmlFor="table-number">Table No</label>
              <select value={tableNo} onChange={tableNoHandler}>
                <option value="Table 1">Table 1</option>
                <option value="Table 2">Table 2</option>
                <option value="Table 3">Table 3</option>
              </select>
              </div>
            <button type="submit">Add to Bill</button>
          
        </form>
      </Card>
    </React.Fragment>
  );
};

export default OrderForm;
