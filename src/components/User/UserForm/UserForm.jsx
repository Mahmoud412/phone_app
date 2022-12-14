import React, { useState } from "react";

const UserForm = ({ insertHandler }) => {
  const [userInput, setInput] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    age: "",
  });
  const inputHandler = (e) => {
    const inputname = e.target.name;
    const value = e.target.value;
    setInput({ ...userInput, [inputname]: value });
  };
  const formHandler = (e) => {
    e.preventDefault();
    userInput.id = Date.now();
    insertHandler(userInput);
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <div className="controller">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={inputHandler}
            value={userInput.name}
          />
        </div>
        <div className="controller">
          <label>gender:</label>
          <input
            type="text"
            name="gender"
            placeholder="gender"
            onChange={inputHandler}
            value={userInput.gender}
          />
        </div>
        <div className="controller">
          <label>phone:</label>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            onChange={inputHandler}
            value={userInput.phone}
          />
        </div>
        <div className="controller">
          <label>address:</label>
          <input
            type="text"
            name="address"
            placeholder="address"
            onChange={inputHandler}
            value={userInput.address}
          />
        </div>
        <div className="controller">
          <label>age:</label>
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={inputHandler}
            value={userInput.age}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserForm;
