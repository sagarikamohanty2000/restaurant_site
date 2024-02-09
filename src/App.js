import React from "react";
import "./App.css";
import OrderForm from "./Components/OrderForm";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <h2>Restaurant Order</h2>
        </header>
      </div>
      <div className="main-body">
      <OrderForm></OrderForm>
      </div>
    </React.Fragment>
  );
}

export default App;
