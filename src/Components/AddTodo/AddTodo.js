import React, {useState} from 'react';
import "./AddTodo.less";

function AddTodo({handleTodoCreate, ...props}){

  const [text, setText] = useState('');

  const handleChange = (ev) => {
    setText(ev.target.value);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if(text.trim()){
      handleTodoCreate(text);
      setText('');
    }
  }

  return(
    <form className='AddTodo' onSubmit={handleSubmit}>
      <input className={"AddTodo__input"} name='text'
             placeholder='New to-do description'
             onChange={handleChange}
             value={text}
      />
      <button className={"AddTodo__btn"} onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default AddTodo;
