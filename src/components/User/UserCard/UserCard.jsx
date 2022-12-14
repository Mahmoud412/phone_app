import React from "react";
import styles from "./userCard.module.css";
const UserCard = (props) => {
  const { userCard, delBtn } = styles;
  const deleteHandler = (id) => {
    props.deleteHandler(id);
  };
  return (
    <div className={userCard}>
      <ul>
        <li>
          <span>name:{props.name}</span>
          <span>age: {props.age}</span>
          <span>phone: {props.phoneNumber}</span>
          <span>gender:{props.gender} </span>
          <span>address:{props.address}</span>
        </li>
      </ul>
      <div className={delBtn} onClick={() => deleteHandler(props.id)}>
        x
      </div>
    </div>
  );
};

export default UserCard;
