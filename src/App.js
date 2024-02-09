import React,{useState} from "react";
import "./App.css";
import OrderForm from "./Components/OrderForm";
import OrderDetails from "./Components/OrderDetails";

function App() {

   const [gettingOrderDetails, setGettingOrderDetails] = useState([]);

  const onGettingOrderDetails = (props) => {
    const newGettingOrderDetails = props;
    setGettingOrderDetails((prevOrders) => {

      return [...prevOrders,props];
    })
    localStorage.setItem(`${props.orderId}`,`${props.dishName} ${props.dishPrice} ${props.tableNo}`);
    console.log(props);
  }
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <h2>Restaurant Order</h2>
        </header>
      </div>
      <div className="main-body">
      <OrderForm orderDetails={onGettingOrderDetails}></OrderForm>
      </div>
      <div>
      <OrderDetails details={gettingOrderDetails}></OrderDetails>
      </div>
    </React.Fragment>
  );
}

export default App;
