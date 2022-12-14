import React from "react";
import { useState } from "react";
import { UserCard, UserForm } from "./components/User";
import Container from "./components/layout/Container";
import "./main.css";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Luke Skywalker",
      email: "luke@skywalker.com",
      age: 21,
      address: "New York No. 1 Lake Park",
      gender: "Male",
      phoneNumber: "134-595-444",
    },
    {
      id: 2,
      name: "mona",
      email: "mona@skywalker.com",
      age: 18,
      address: "New York No. 1 Lake Park",
      gender: "Female",
      phoneNumber: "123-00-222",
    },
    {
      id: 3,
      name: "Skywalker",
      email: "S@skywalker.com",
      age: 30,
      address: "New York No. 1 Lake Park",
      gender: "Male",
      phoneNumber: "123-123-444",
    },
    {
      id: 4,
      name: "mahmoud",
      email: "mahmoud@m.com",
      age: 45,
      address: "cairo",
      gender: "Male",
      phoneNumber: "123-456",
    },
  ]);
  const deleteHandler = (id) => {
    setData(data.filter((el) => el.id !== id));
  };
  const insertHandler = (formData) => {
    setData([...data, formData]);
  };

  const dataLoops = data.map((el) => (
    <UserCard {...el} key={el.id} deleteHandler={deleteHandler} />
  ));

  return (
    <>
      <Container>
        <UserForm insertHandler={insertHandler} />
        {dataLoops}
      </Container>
    </>
  );
}

export default App;
