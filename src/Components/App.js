import React, {useState} from "react";
import TodoList from "./TodoList/TodoList";
import UserList from "./UserList/UserList";
import "./App.less";

function App() {

  const [userClicked, setUserClicked] = useState({});

  const openTodo = (user) => {
    setUserClicked(user)
  };

  return (
    <div className='App'>
      <UserList userId={userClicked.userId} openTodo={openTodo}/>
      {
        userClicked.firstName &&
        <TodoList user={userClicked} />
      }
    </div>
  );
}

export default App;
