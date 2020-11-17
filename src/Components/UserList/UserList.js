import React from "react";
import {USERS} from "../../Constants/Users";

function User({userData, openTodo, ...props}) {
  return (
    <>
      <tr onClick={()=>openTodo(userData)}>
        <td>{userData.firstName + " " + userData.lastName}</td>
        <td>{userData.completionRate}</td>
      </tr>
    </>
  );
}

function UserList({openTodo, ...props}) {

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Completion rate (%)</td>
        </tr>
      </thead>
      <tbody>
        {USERS.map((user, ind) => (
          <User openTodo={openTodo} key={ind} userData={user} />
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
