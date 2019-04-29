export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}


export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
}


export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED,
    payload: null
  }
}


export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id
  }
};
