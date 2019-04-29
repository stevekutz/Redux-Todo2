export const ADD_TODO_OA = 'ADD_TODO_OA';
export const TOGGLE_TODO_OA = 'TOGGLE_TODO_OA';
export const REMOVE_TODO_OA = 'REMOVE_TODO_OA';
export const CLEAR_COMPLETED_OA = 'CLEAR_COMPLETED_OA';

// another syntax
export const addTodoOA = (newTodo) => {
  return {
    type: ADD_TODO_OA,
    payload: newTodo
  }
};

// another syntax
export const toggleTodoOA = (id) => {
  return {
    type: TOGGLE_TODO_OA,
    payload: id
  };
};

export const clearCompletedOA = () => {
  return {
    type: CLEAR_COMPLETED_OA,
    payoad: null
  }
};

export const removeTodoOA = (id) => {
  return {
    type: REMOVE_TODO_OA,
    payload: id
  }
};