import CustomerComponent from "./components/CustomerComponent";
import { useState } from "react";

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (customer) => {
    const id = Math.floor(Math.random() * 1000);
    const newCustomers = { id, ...customer };
    setCustomers([...customers, newCustomers]);
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div className="conatainer">
      <CustomerComponent
        deleteCustomer={deleteCustomer}
        addNewCustomer={addNewCustomer}
        data={customers}
      />
    </div>
  );
}

export default App;
