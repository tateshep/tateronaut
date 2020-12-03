import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
  Button,
  TextArea
} from "nes-react";

/** actions */
import { addTodo, removeTodo} from '../../redux/slices/todos';
/** helpers */
import { getTodos } from '../../redux/selectors/todos';


export const TodosDisplay = ({todos, addTodo, removeTodo}) => {
  const todosList = Object.values(todos).map((el,index) => {
    return (
      <div key={todos[index].id}>
        <h2>{todos[index].id}</h2>
        <span>{todos[index].text}</span>
        <Button onClick={() => removeTodo(todos[index].id)} error>X</Button>
      </div>
    )
  })
  const [todosNum, setTodosNum] = useState(todosList.length);
  const [newTodoText, setNewTodoText ] = useState('');

  const handleClick = () => {
    setTodosNum(todosNum + 1);
    addTodo({id: `todo${todosNum + 1}`, text: newTodoText})
    setNewTodoText('');
  }

  return (
    <div className='todos' style={{margin: 24}}>
      { todosList.length === 0 && <p>There is nothing left todo!</p>}
      {todosList}
      <TextArea onChange={e => setNewTodoText(e.target.value)} value={newTodoText}/>
      <Button onClick={handleClick} style={{margin: 24}}>Add Todo</Button>
    </div>
  );
};


/* istanbul ignore next */
export default connect(
  state => ({
    todos: getTodos(state)
  }),
  {
    addTodo,
    removeTodo
  }
)(TodosDisplay);
