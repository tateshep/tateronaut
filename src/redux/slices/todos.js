import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {id: 'todo1', text: 'you need to do this', completed: false},
    {id: 'todo2', text: 'you need to more stuff!', completed: false},
  ],
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload
      state.push({ id, text, completed: false })
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      state.pop(todo)
    }
  }
})

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer