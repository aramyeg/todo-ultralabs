import React, {useState, useEffect} from "react";
import AddTodo from "../AddTodo/AddTodo";
import {sortByCompletion} from "../../Utility/SortFunctions";
import "./TodoList.less";

function TodoList({user, ...props}) {

  const [todoState, setTodoState] = useState([]);

  useEffect(()=>{
    const copyTodoList = user.todoList.map(todo => ({...todo}));
    setTodoState(copyTodoList);
  }, [user]);

  const handleTodoCreate = (text) => {
    const newTodo = {
      description : text,
      complete : false
    };
    user.todoList.push(newTodo);
    setTodoState([...todoState, newTodo]);
  };

  const markDone = (id) => {
    user.todoList.find( todo => todo.todoId === id).complete = true;
    const copyTodoList = user.todoList.map(todo => ({...todo}));
    setTodoState(copyTodoList);
  }

  const todoList = [...todoState].sort(sortByCompletion).map((todo, ind)=>{
    return(
      <div className="TodoList__item" key={ind}>
        <span className="TodoList__status">{todo.complete ? "Completed" : "Incomplete"}</span>
        <span className="TodoList__description">{todo.description}</span>
        {
          !todo.complete &&
          <button className="TodoList__btn" onClick={()=>{markDone(todo.todoId)}}>Mark as Done</button>
        }
      </div>
    )
  });

  return (
    <section className="TodoList__section">
      <AddTodo handleTodoCreate={handleTodoCreate}/>
      {todoList}
    </section>
  );
}

export default TodoList;
