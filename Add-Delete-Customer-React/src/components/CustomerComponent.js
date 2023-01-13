import { useState } from "react";

export default function Customer({ data, addNewCustomer, deleteCustomer }) {
  const [valueUser, setValueUser] = useState("");
  const [valueAge, setValueAge] = useState("");

  const renderedCustomer = data.map((customer) => {
    return (
      <div key={customer.id}>
        <p>
          {customer.name}{" "}
          <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
        </p>
        <p>{customer.age}</p>
      </div>
    );
  });

  const handleUserChange = (e) => {
    setValueUser(e.target.value);
  };
  const handleAgeChange = (e) => {
    setValueAge(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newCustomer = { name: valueUser, age: valueAge };
    addNewCustomer(newCustomer);
    setValueUser("");
    setValueAge("");
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        {renderedCustomer}
        <input
          placeholder="Customer Name"
          value={valueUser}
          onChange={handleUserChange}
        />
        <input placeholder="Age" onChange={handleAgeChange} value={valueAge} />

        <button>Add</button>
      </form>
    </div>
  );
}
