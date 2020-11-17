import React from "react";
import {USERS} from "../../Constants/Users";
import "./UserList.less";

function User({userData, openTodo, userId, ...props}) {

  return (
    <>
      <tr className={`UserList__row ${ userId === userData.userId ? "UserList__row--opened" : ""}`}
          onClick={()=>{
            openTodo(userData)
          }}>
        <td>{userData.firstName + " " + userData.lastName}</td>
        <td>{userData.completionRate}</td>
      </tr>
    </>
  );
}

function UserList({openTodo, userId, ...props}) {

  return (
    <table className={"UserList"}>
      <thead className={"UserList__header"}>
        <tr>
          <td>Name</td>
          <td>Completion rate (%)</td>
        </tr>
      </thead>
      <tbody className={"UserList__body"}>
        {USERS.map((user, ind) => (
          <User userId={userId} openTodo={openTodo} key={ind} userData={user} />
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
