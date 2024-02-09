import React from "react";
import OrderList from "./OrderList";
import Card from "./UI/Card";

const OrderDeatils = (props) => {
  return(
    <React.Fragment>
      <div className="table-1">
        <h3>Table 1: Orderd Dish</h3>
        <ul>
          {props.details.map((dish) =>
            dish.tableNo === "Table 1" ? (
              <Card key={dish.orderId}>
                <OrderList dishDetails={dish}></OrderList>
              </Card>
            ) : (
              ""
            )
          )}
        </ul>
      </div>

      <div className="table-2">
        <h3>Table 2: Orderd Dish </h3>

        <ul>
          {props.details.map((dish) =>
            dish.tableNo === "Table 2" ? (
              <Card key={dish.orderId}>
                <OrderList dishDetails={dish}></OrderList>
              </Card>
            ) : (
              ""
            )
          )}{" "}
        </ul>
      </div>

      <div className="table-3">
        <h3>Table 3: Orderd Dish</h3>

        <ul>
          {props.details.map((dish) =>
            dish.tableNo === "Table 3" ? (
              <Card key={dish.orderId}>
                <OrderList dishDetails={dish}></OrderList>
              </Card>
            ) : (
              ""
            )
          )}{" "}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default OrderDeatils;
